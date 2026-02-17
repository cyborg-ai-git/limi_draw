//==================================================================================================
// LimiDraw Peer Client - WASM Initializer (Trunk data-initializer)
// CC BY-NC-ND 4.0 Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International
// github: https://github.com/cyborg-ai-git
//==================================================================================================
// Trunk calls these callbacks during WASM loading:
//   onStart()                  - Loading begins
//   onProgress({current,total}) - Real byte-by-byte download progress
//   onComplete()               - Download finished, compilation starts
//   onSuccess(wasm)            - WASM instantiated, Rust main() will run
//   onFailure(error)           - Something went wrong
//
// Phase 1 (0-90%): Real download via onProgress
// Phase 2 (90-100%): WASM compile + Rust CApp::do_init + eframe start
//   hideLoadingScreen() is called from Rust when the app is fully ready.
//==================================================================================================

var DOWNLOAD_MAX_PERCENT = 90;

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
}

function setProgress(percent, label) {
    var bar = document.getElementById('progress-bar');
    var text = document.getElementById('progress-text');
    var heading = document.getElementById('loading-text');
    if (!bar || !text) return;

    var clamped = Math.min(100, Math.max(0, percent));
    bar.style.width = clamped + '%';
    text.textContent = Math.round(clamped) + '%';
    if (label && heading) {
        heading.textContent = label;
    }
}

export default function initializer() {
    return {
        onStart: function () {
            setProgress(0, 'Downloading ...');
        },

        onProgress: function (info) {
            var current = info.current;
            var total = info.total;

            if (!total || total === 0) {
                // Server did not send Content-Length; show bytes only
                setProgress(0, 'Downloading ... ' + formatBytes(current));
                return;
            }

            var ratio = current / total;
            var percent = ratio * DOWNLOAD_MAX_PERCENT;
            setProgress(percent,
                'Downloading ... ' +
                formatBytes(current) + ' / ' + formatBytes(total));
        },

        onComplete: function () {
            setProgress(DOWNLOAD_MAX_PERCENT, 'Compiling module...');
        },

        onSuccess: function () {
            setProgress(DOWNLOAD_MAX_PERCENT + 5, 'Initializing application...');
        },

        onFailure: function (error) {
            var heading = document.getElementById('loading-text');
            if (heading) {
                heading.textContent = 'Failed to load application';
                heading.style.color = '#ff4444';
            }
            console.error('WASM loading failed:', error);
        }
    };
}

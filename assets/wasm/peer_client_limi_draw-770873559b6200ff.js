export class Kex {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Kex.prototype);
        obj.__wbg_ptr = ptr;
        KexFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        KexFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_kex_free(ptr, 0);
    }
    /**
     * @returns {Uint8Array}
     */
    get ciphertext() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.kex_ciphertext(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_export4(r0, r1 * 1, 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {Uint8Array} public_key
     */
    constructor(public_key) {
        const ptr0 = passArray8ToWasm0(public_key, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.kex_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        KexFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Uint8Array} ciphertext
     */
    set ciphertext(ciphertext) {
        const ptr0 = passArray8ToWasm0(ciphertext, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.kex_set_ciphertext(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {Uint8Array} sharedSecret
     */
    set sharedSecret(sharedSecret) {
        const ptr0 = passArray8ToWasm0(sharedSecret, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.kex_set_sharedSecret(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @returns {Uint8Array}
     */
    get sharedSecret() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.kex_sharedSecret(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_export4(r0, r1 * 1, 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
if (Symbol.dispose) Kex.prototype[Symbol.dispose] = Kex.prototype.free;

export class Keys {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Keys.prototype);
        obj.__wbg_ptr = ptr;
        KeysFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        KeysFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_keys_free(ptr, 0);
    }
    constructor() {
        const ret = wasm.keypair();
        this.__wbg_ptr = ret >>> 0;
        KeysFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {Uint8Array}
     */
    get pubkey() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.kex_ciphertext(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_export4(r0, r1 * 1, 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @returns {Uint8Array}
     */
    get secret() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.kex_sharedSecret(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_export4(r0, r1 * 1, 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
if (Symbol.dispose) Keys.prototype[Symbol.dispose] = Keys.prototype.free;

export class Params {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ParamsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_params_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get ciphertextBytes() {
        const ret = wasm.__wbg_get_params_ciphertextBytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get publicKeyBytes() {
        const ret = wasm.__wbg_get_params_publicKeyBytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get secretKeyBytes() {
        const ret = wasm.__wbg_get_params_secretKeyBytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get sharedSecretBytes() {
        const ret = wasm.__wbg_get_params_sharedSecretBytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    static get ciphertextBytes() {
        const ret = wasm.params_ciphertextBytes();
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    static get publicKeyBytes() {
        const ret = wasm.params_ciphertextBytes();
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    static get secretKeyBytes() {
        const ret = wasm.params_secretKeyBytes();
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    static get sharedSecretBytes() {
        const ret = wasm.params_sharedSecretBytes();
        return ret >>> 0;
    }
}
if (Symbol.dispose) Params.prototype[Symbol.dispose] = Params.prototype.free;

/**
 * @param {Uint8Array} ct
 * @param {Uint8Array} sk
 * @returns {Uint8Array}
 */
export function decapsulate(ct, sk) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(ct, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(sk, wasm.__wbindgen_export);
        const len1 = WASM_VECTOR_LEN;
        wasm.decapsulate(retptr, ptr0, len0, ptr1, len1);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
        if (r3) {
            throw takeObject(r2);
        }
        var v3 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_export4(r0, r1 * 1, 1);
        return v3;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {Uint8Array} pk
 * @returns {Kex}
 */
export function encapsulate(pk) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(pk, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.encapsulate(retptr, ptr0, len0);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeObject(r1);
        }
        return Kex.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @returns {Keys}
 */
export function keypair() {
    const ret = wasm.keypair();
    return Keys.__wrap(ret);
}

/**
 * Entry point invoked by JavaScript in a worker.
 * @param {number} ptr
 */
export function task_worker_entry_point(ptr) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.task_worker_entry_point(retptr, ptr);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function(arg0) {
            const v = getObject(arg0);
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function(arg0, arg1) {
            const ret = debugString(getObject(arg1));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_47fa6863be6f2f25: function(arg0, arg1) {
            const ret = getObject(arg0) in getObject(arg1);
            return ret;
        },
        __wbg___wbindgen_is_function_0095a73b8b156f76: function(arg0) {
            const ret = typeof(getObject(arg0)) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(arg0) {
            const val = getObject(arg0);
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_cd444516edc5b180: function(arg0) {
            const ret = typeof(getObject(arg0)) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(arg0) {
            const ret = getObject(arg0) === undefined;
            return ret;
        },
        __wbg___wbindgen_number_get_8ff4255516ccad3e: function(arg0, arg1) {
            const obj = getObject(arg1);
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_72fb696202c56729: function(arg0, arg1) {
            const obj = getObject(arg1);
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_be289d5034ed271b: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_d9b87ff7982e3b21: function(arg0) {
            getObject(arg0)._wbg_cb_unref();
        },
        __wbg_activeElement_1554b6917654f8d6: function(arg0) {
            const ret = getObject(arg0).activeElement;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_activeElement_d9d2a80dfafa67ed: function(arg0) {
            const ret = getObject(arg0).activeElement;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_activeTexture_6f9a710514686c24: function(arg0, arg1) {
            getObject(arg0).activeTexture(arg1 >>> 0);
        },
        __wbg_activeTexture_7e39cb8fdf4b6d5a: function(arg0, arg1) {
            getObject(arg0).activeTexture(arg1 >>> 0);
        },
        __wbg_addEventListener_c917b5aafbcf493f: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
        }, arguments); },
        __wbg_altKey_73c1173ba53073d5: function(arg0) {
            const ret = getObject(arg0).altKey;
            return ret;
        },
        __wbg_altKey_8155c319c215e3aa: function(arg0) {
            const ret = getObject(arg0).altKey;
            return ret;
        },
        __wbg_appendChild_dea38765a26d346d: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).appendChild(getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_arrayBuffer_05ce1af23e9064e8: function(arg0) {
            const ret = getObject(arg0).arrayBuffer();
            return addHeapObject(ret);
        },
        __wbg_at_dfc235641cc0e40c: function(arg0, arg1) {
            const ret = getObject(arg0).at(arg1);
            return addHeapObject(ret);
        },
        __wbg_attachShader_32114efcf2744eb6: function(arg0, arg1, arg2) {
            getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
        },
        __wbg_attachShader_b36058e5c9eeaf54: function(arg0, arg1, arg2) {
            getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
        },
        __wbg_bindBuffer_69a7a0b8f3f9b9cf: function(arg0, arg1, arg2) {
            getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
        },
        __wbg_bindBuffer_c9068e8712a034f5: function(arg0, arg1, arg2) {
            getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
        },
        __wbg_bindTexture_b2b7b1726a83f93e: function(arg0, arg1, arg2) {
            getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
        },
        __wbg_bindTexture_ec13ddcb9dc8e032: function(arg0, arg1, arg2) {
            getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
        },
        __wbg_bindVertexArrayOES_c2610602f7485b3f: function(arg0, arg1) {
            getObject(arg0).bindVertexArrayOES(getObject(arg1));
        },
        __wbg_bindVertexArray_78220d1edb1d2382: function(arg0, arg1) {
            getObject(arg0).bindVertexArray(getObject(arg1));
        },
        __wbg_blendEquationSeparate_1b12c43928cc7bc1: function(arg0, arg1, arg2) {
            getObject(arg0).blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
        },
        __wbg_blendEquationSeparate_a8094fbec94cf80e: function(arg0, arg1, arg2) {
            getObject(arg0).blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
        },
        __wbg_blendFuncSeparate_95465944f788a092: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        },
        __wbg_blendFuncSeparate_f366c170c5097fbe: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        },
        __wbg_blockSize_ef9a626745d7dfac: function(arg0) {
            const ret = getObject(arg0).blockSize;
            return ret;
        },
        __wbg_blur_07f34335e06e5234: function() { return handleError(function (arg0) {
            getObject(arg0).blur();
        }, arguments); },
        __wbg_body_f67922363a220026: function(arg0) {
            const ret = getObject(arg0).body;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_bottom_c7ec510a18034add: function(arg0) {
            const ret = getObject(arg0).bottom;
            return ret;
        },
        __wbg_bufferData_52235e85894af988: function(arg0, arg1, arg2, arg3) {
            getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
        },
        __wbg_bufferData_98f6c413a8f0f139: function(arg0, arg1, arg2, arg3) {
            getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
        },
        __wbg_buffer_26d0910f3a5bc899: function(arg0) {
            const ret = getObject(arg0).buffer;
            return addHeapObject(ret);
        },
        __wbg_button_d86841d0a03adc44: function(arg0) {
            const ret = getObject(arg0).button;
            return ret;
        },
        __wbg_call_389efe28435a9388: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_call_4708e0c13bdc8e95: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_cancelAnimationFrame_cd35895d78cf4510: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).cancelAnimationFrame(arg1);
        }, arguments); },
        __wbg_cancel_8f4e3a220b2f0fe1: function(arg0) {
            getObject(arg0).cancel();
        },
        __wbg_changedTouches_b6ab7be7b1aed8d6: function(arg0) {
            const ret = getObject(arg0).changedTouches;
            return addHeapObject(ret);
        },
        __wbg_clearColor_404a3b16d43db93b: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
        },
        __wbg_clearColor_f16a5dae33fe425d: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
        },
        __wbg_clearInterval_c75df0651e74fbb8: function(arg0, arg1) {
            getObject(arg0).clearInterval(arg1);
        },
        __wbg_clearTimeout_df03cf00269bc442: function(arg0, arg1) {
            getObject(arg0).clearTimeout(arg1);
        },
        __wbg_clear_4d801d0d054c3579: function(arg0, arg1) {
            getObject(arg0).clear(arg1 >>> 0);
        },
        __wbg_clear_7187030f892c5ca0: function(arg0, arg1) {
            getObject(arg0).clear(arg1 >>> 0);
        },
        __wbg_click_0e9c20848b655ed3: function(arg0) {
            getObject(arg0).click();
        },
        __wbg_clientX_a3c5f4ff30e91264: function(arg0) {
            const ret = getObject(arg0).clientX;
            return ret;
        },
        __wbg_clientX_ed7d2827ca30c165: function(arg0) {
            const ret = getObject(arg0).clientX;
            return ret;
        },
        __wbg_clientY_79ab4711d0597b2c: function(arg0) {
            const ret = getObject(arg0).clientY;
            return ret;
        },
        __wbg_clientY_e28509acb9b4a42a: function(arg0) {
            const ret = getObject(arg0).clientY;
            return ret;
        },
        __wbg_clipboardData_018789e461e23aaa: function(arg0) {
            const ret = getObject(arg0).clipboardData;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_clipboard_98c5a32249fa8416: function(arg0) {
            const ret = getObject(arg0).clipboard;
            return addHeapObject(ret);
        },
        __wbg_close_1d08eaf57ed325c0: function() { return handleError(function (arg0) {
            getObject(arg0).close();
        }, arguments); },
        __wbg_colorMask_177d9762658e5e28: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
        },
        __wbg_colorMask_7a8dbc86e7376a9b: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
        },
        __wbg_compileShader_63b824e86bb00b8f: function(arg0, arg1) {
            getObject(arg0).compileShader(getObject(arg1));
        },
        __wbg_compileShader_94718a93495d565d: function(arg0, arg1) {
            getObject(arg0).compileShader(getObject(arg1));
        },
        __wbg_contentBoxSize_328a5cd3e7d063a9: function(arg0) {
            const ret = getObject(arg0).contentBoxSize;
            return addHeapObject(ret);
        },
        __wbg_contentRect_79b98e4d4f4728a4: function(arg0) {
            const ret = getObject(arg0).contentRect;
            return addHeapObject(ret);
        },
        __wbg_createBuffer_26534c05e01b8559: function(arg0) {
            const ret = getObject(arg0).createBuffer();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createBuffer_c4ec897aacc1b91c: function(arg0) {
            const ret = getObject(arg0).createBuffer();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createElement_49f60fdcaae809c8: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_createObjectURL_918185db6a10a0c8: function() { return handleError(function (arg0, arg1) {
            const ret = URL.createObjectURL(getObject(arg1));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_createProgram_98aaa91f7c81c5e2: function(arg0) {
            const ret = getObject(arg0).createProgram();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createProgram_9b7710a1f2701c2c: function(arg0) {
            const ret = getObject(arg0).createProgram();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createShader_e3ac08ed8c5b14b2: function(arg0, arg1) {
            const ret = getObject(arg0).createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createShader_f2b928ca9a426b14: function(arg0, arg1) {
            const ret = getObject(arg0).createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createTexture_16d2c8a3d7d4a75a: function(arg0) {
            const ret = getObject(arg0).createTexture();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createTexture_f9451a82c7527ce2: function(arg0) {
            const ret = getObject(arg0).createTexture();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createVertexArrayOES_bd76ceee6ab9b95e: function(arg0) {
            const ret = getObject(arg0).createVertexArrayOES();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_createVertexArray_ad5294951ae57497: function(arg0) {
            const ret = getObject(arg0).createVertexArray();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_crypto_86f2631e91b51511: function(arg0) {
            const ret = getObject(arg0).crypto;
            return addHeapObject(ret);
        },
        __wbg_ctrlKey_09a1b54d77dea92b: function(arg0) {
            const ret = getObject(arg0).ctrlKey;
            return ret;
        },
        __wbg_ctrlKey_96ff94f8b18636a3: function(arg0) {
            const ret = getObject(arg0).ctrlKey;
            return ret;
        },
        __wbg_dataTransfer_d924a622fbe51b06: function(arg0) {
            const ret = getObject(arg0).dataTransfer;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_data_5330da50312d0bc1: function(arg0) {
            const ret = getObject(arg0).data;
            return addHeapObject(ret);
        },
        __wbg_data_acd149571f3b741a: function(arg0, arg1) {
            const ret = getObject(arg1).data;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_deleteBuffer_22fcc93912cbf659: function(arg0, arg1) {
            getObject(arg0).deleteBuffer(getObject(arg1));
        },
        __wbg_deleteBuffer_ab099883c168644d: function(arg0, arg1) {
            getObject(arg0).deleteBuffer(getObject(arg1));
        },
        __wbg_deleteProgram_9298fb3e3c1d3a78: function(arg0, arg1) {
            getObject(arg0).deleteProgram(getObject(arg1));
        },
        __wbg_deleteProgram_f354e79b8cae8076: function(arg0, arg1) {
            getObject(arg0).deleteProgram(getObject(arg1));
        },
        __wbg_deleteShader_aaf3b520a64d5d9d: function(arg0, arg1) {
            getObject(arg0).deleteShader(getObject(arg1));
        },
        __wbg_deleteShader_ff70ca962883e241: function(arg0, arg1) {
            getObject(arg0).deleteShader(getObject(arg1));
        },
        __wbg_deleteTexture_2be78224e5584a8b: function(arg0, arg1) {
            getObject(arg0).deleteTexture(getObject(arg1));
        },
        __wbg_deleteTexture_9d411c0e60ffa324: function(arg0, arg1) {
            getObject(arg0).deleteTexture(getObject(arg1));
        },
        __wbg_deltaMode_a1d1df711e44cefc: function(arg0) {
            const ret = getObject(arg0).deltaMode;
            return ret;
        },
        __wbg_deltaX_f0ca9116db5f7bc1: function(arg0) {
            const ret = getObject(arg0).deltaX;
            return ret;
        },
        __wbg_deltaY_eb94120160ac821c: function(arg0) {
            const ret = getObject(arg0).deltaY;
            return ret;
        },
        __wbg_detachShader_0837532df5c988ca: function(arg0, arg1, arg2) {
            getObject(arg0).detachShader(getObject(arg1), getObject(arg2));
        },
        __wbg_detachShader_1ba1e8cb604560a9: function(arg0, arg1, arg2) {
            getObject(arg0).detachShader(getObject(arg1), getObject(arg2));
        },
        __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: function(arg0) {
            const ret = getObject(arg0).devicePixelContentBoxSize;
            return addHeapObject(ret);
        },
        __wbg_devicePixelRatio_5c458affc89fc209: function(arg0) {
            const ret = getObject(arg0).devicePixelRatio;
            return ret;
        },
        __wbg_disableVertexAttribArray_24a020060006b10f: function(arg0, arg1) {
            getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_disableVertexAttribArray_4bac633c27bae599: function(arg0, arg1) {
            getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_disable_7fe6fb3e97717f88: function(arg0, arg1) {
            getObject(arg0).disable(arg1 >>> 0);
        },
        __wbg_disable_bd37bdcca1764aea: function(arg0, arg1) {
            getObject(arg0).disable(arg1 >>> 0);
        },
        __wbg_disconnect_5202f399852258c0: function(arg0) {
            getObject(arg0).disconnect();
        },
        __wbg_document_ee35a3d3ae34ef6c: function(arg0) {
            const ret = getObject(arg0).document;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_drawElements_94f6577070a45da2: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
        },
        __wbg_drawElements_ea2abffa9d1dc736: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
        },
        __wbg_elementFromPoint_c626cb9a65328c63: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).elementFromPoint(arg1, arg2);
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_elementFromPoint_fcddd007465b6e73: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).elementFromPoint(arg1, arg2);
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_enableVertexAttribArray_475e06c31777296d: function(arg0, arg1) {
            getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_enableVertexAttribArray_aa6e40408261eeb9: function(arg0, arg1) {
            getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_enable_d1ac04dfdd2fb3ae: function(arg0, arg1) {
            getObject(arg0).enable(arg1 >>> 0);
        },
        __wbg_enable_fee40f19b7053ea3: function(arg0, arg1) {
            getObject(arg0).enable(arg1 >>> 0);
        },
        __wbg_error_541113e32ba1ecbd: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_export4(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_9a7fe3f932034cde: function(arg0) {
            console.error(getObject(arg0));
        },
        __wbg_error_c8eaf2faafef0bdd: function(arg0, arg1) {
            console.error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_files_c7608e3fb8eb4d07: function(arg0) {
            const ret = getObject(arg0).files;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_focus_128ff465f65677cc: function() { return handleError(function (arg0) {
            getObject(arg0).focus();
        }, arguments); },
        __wbg_force_6acda126382fc3c0: function(arg0) {
            const ret = getObject(arg0).force;
            return ret;
        },
        __wbg_generateMipmap_5f9058c19cf7c6c1: function(arg0, arg1) {
            getObject(arg0).generateMipmap(arg1 >>> 0);
        },
        __wbg_generateMipmap_c3aad515dd61ffd6: function(arg0, arg1) {
            getObject(arg0).generateMipmap(arg1 >>> 0);
        },
        __wbg_getAttribLocation_16c406a68275ed4b: function(arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).getAttribLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
            return ret;
        },
        __wbg_getAttribLocation_7321cf2d67e036f6: function(arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).getAttribLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
            return ret;
        },
        __wbg_getBoundingClientRect_b5c8c34d07878818: function(arg0) {
            const ret = getObject(arg0).getBoundingClientRect();
            return addHeapObject(ret);
        },
        __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).getComputedStyle(getObject(arg1));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_getContext_2a5764d48600bc43: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_getData_2aada4ab05d445e3: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg1).getData(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getElementById_e34377b79d7285f6: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_getError_1182114725905664: function(arg0) {
            const ret = getObject(arg0).getError();
            return ret;
        },
        __wbg_getError_bba8594facbfd5e1: function(arg0) {
            const ret = getObject(arg0).getError();
            return ret;
        },
        __wbg_getExtension_388df13305a298af: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).getExtension(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_getExtension_3c0cb5ae01bb4b17: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).getExtension(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_getHours_e02e88722301c418: function(arg0) {
            const ret = getObject(arg0).getHours();
            return ret;
        },
        __wbg_getItem_0c792d344808dcf5: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg1).getItem(getStringFromWasm0(arg2, arg3));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getMinutes_eb73ceeb8231f6f4: function(arg0) {
            const ret = getObject(arg0).getMinutes();
            return ret;
        },
        __wbg_getParameter_1ecb910cfdd21f88: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).getParameter(arg1 >>> 0);
            return addHeapObject(ret);
        }, arguments); },
        __wbg_getParameter_2e1f97ecaab76274: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).getParameter(arg1 >>> 0);
            return addHeapObject(ret);
        }, arguments); },
        __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: function(arg0, arg1, arg2) {
            const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: function(arg0, arg1, arg2) {
            const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getProgramParameter_43fbc6d2613c08b3: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_getProgramParameter_92e4540ca9da06b2: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_getPropertyValue_d6911b2a1f9acba9: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg1).getPropertyValue(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getRandomValues_b3f15fcbfabb0f8b: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).getRandomValues(getObject(arg1));
        }, arguments); },
        __wbg_getRootNode_193e544ed534e810: function(arg0) {
            const ret = getObject(arg0).getRootNode();
            return addHeapObject(ret);
        },
        __wbg_getSeconds_d5269a98a03bab5e: function(arg0) {
            const ret = getObject(arg0).getSeconds();
            return ret;
        },
        __wbg_getShaderInfoLog_9991e9e77b0c6805: function(arg0, arg1, arg2) {
            const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getShaderInfoLog_9e0b96da4b13ae49: function(arg0, arg1, arg2) {
            const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getShaderParameter_786fd84f85720ca8: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_getShaderParameter_afa4a3dd9dd397c1: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_getSupportedExtensions_57142a6b598d7787: function(arg0) {
            const ret = getObject(arg0).getSupportedExtensions();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_getSupportedExtensions_c37f749a951eba04: function(arg0) {
            const ret = getObject(arg0).getSupportedExtensions();
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_getUniformLocation_71c070e6644669ad: function(arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_getUniformLocation_d06b3a5b3c60e95c: function(arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_get_4fe487fe39ff3573: function(arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_get_5bd55a138a9e899f: function(arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_get_9a1f194723936140: function(arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_get_9b94d73e6221f75c: function(arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return addHeapObject(ret);
        },
        __wbg_get_b3ed3ad4be2bc8ac: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_has_d4e53238966c12b6: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.has(getObject(arg0), getObject(arg1));
            return ret;
        }, arguments); },
        __wbg_hash_90eadad0e1447454: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).hash;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_height_38750dc6de41ee75: function(arg0) {
            const ret = getObject(arg0).height;
            return ret;
        },
        __wbg_height_c2027cf67d1c9b11: function(arg0) {
            const ret = getObject(arg0).height;
            return ret;
        },
        __wbg_hidden_8ce6a98b8c12451c: function(arg0) {
            const ret = getObject(arg0).hidden;
            return ret;
        },
        __wbg_hideLoadingScreen_6994e2d5b68b187f: function() {
            window.hideLoadingScreen();
        },
        __wbg_host_92d607209031b72c: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).host;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_hostname_0c450e33386895ba: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).hostname;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_href_67854c3dd511f6f3: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).href;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_id_ff64a5892a30d4e9: function(arg0, arg1) {
            const ret = getObject(arg1).id;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_identifier_5feaba602edf9981: function(arg0) {
            const ret = getObject(arg0).identifier;
            return ret;
        },
        __wbg_inlineSize_3e4e7e8c813884fd: function(arg0) {
            const ret = getObject(arg0).inlineSize;
            return ret;
        },
        __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Document_50f5ff170c1a7826: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Document;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Element_9e662f49ab6c6beb: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Element;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlAnchorElement_770fa141c7731617: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof HTMLAnchorElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlElement_5abfac207260fd6f: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof HTMLElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlInputElement_c10b7260b4e0710a: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof HTMLInputElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_ResizeObserverEntry_16bca25646e32231: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof ResizeObserverEntry;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_ResizeObserverSize_cee71be747d9d29e: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof ResizeObserverSize;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_ShadowRoot_5285adde3587c73e: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof ShadowRoot;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof WebGL2RenderingContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_WebGlRenderingContext_53391327f021e3ab: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof WebGLRenderingContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_ed49b2db8df90359: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_isComposing_1eafc5b1376f01d1: function(arg0) {
            const ret = getObject(arg0).isComposing;
            return ret;
        },
        __wbg_isComposing_9323fa62320f5fc0: function(arg0) {
            const ret = getObject(arg0).isComposing;
            return ret;
        },
        __wbg_isSecureContext_1e186b850f07cfb3: function(arg0) {
            const ret = getObject(arg0).isSecureContext;
            return ret;
        },
        __wbg_is_f29129f676e5410c: function(arg0, arg1) {
            const ret = Object.is(getObject(arg0), getObject(arg1));
            return ret;
        },
        __wbg_item_98b174cdde606b25: function(arg0, arg1) {
            const ret = getObject(arg0).item(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_items_4130211600bde9a4: function(arg0) {
            const ret = getObject(arg0).items;
            return addHeapObject(ret);
        },
        __wbg_keyCode_155291a11654466e: function(arg0) {
            const ret = getObject(arg0).keyCode;
            return ret;
        },
        __wbg_key_d41e8e825e6bb0e9: function(arg0, arg1) {
            const ret = getObject(arg1).key;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_lastModified_a5cfce993c651681: function(arg0) {
            const ret = getObject(arg0).lastModified;
            return ret;
        },
        __wbg_left_3b7c3c1030d5ca7a: function(arg0) {
            const ret = getObject(arg0).left;
            return ret;
        },
        __wbg_length_25b2ccd77d48ecb1: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_length_32ed9a279acd054c: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_length_35a7bace40f36eac: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_length_9efde69e99cd464e: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_length_dd7a84decbd9cde7: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_linkProgram_6600dd2c0863bbfd: function(arg0, arg1) {
            getObject(arg0).linkProgram(getObject(arg1));
        },
        __wbg_linkProgram_be6b825cf66d177b: function(arg0, arg1) {
            getObject(arg0).linkProgram(getObject(arg1));
        },
        __wbg_localStorage_a22d31b9eacc4594: function() { return handleError(function (arg0) {
            const ret = getObject(arg0).localStorage;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_location_df7ca06c93e51763: function(arg0) {
            const ret = getObject(arg0).location;
            return addHeapObject(ret);
        },
        __wbg_log_6b5ca2e6124b2808: function(arg0) {
            console.log(getObject(arg0));
        },
        __wbg_matchMedia_91d4fc9729dc3c84: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_matches_4b5c22bd830f7bb3: function(arg0) {
            const ret = getObject(arg0).matches;
            return ret;
        },
        __wbg_metaKey_374999c340f70626: function(arg0) {
            const ret = getObject(arg0).metaKey;
            return ret;
        },
        __wbg_metaKey_67113fb40365d736: function(arg0) {
            const ret = getObject(arg0).metaKey;
            return ret;
        },
        __wbg_msCrypto_d562bbe83e0d4b91: function(arg0) {
            const ret = getObject(arg0).msCrypto;
            return addHeapObject(ret);
        },
        __wbg_name_171cddfde96a29c8: function(arg0, arg1) {
            const ret = getObject(arg1).name;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_navigator_43be698ba96fc088: function(arg0) {
            const ret = getObject(arg0).navigator;
            return addHeapObject(ret);
        },
        __wbg_new_057993d5b5e07835: function() { return handleError(function (arg0, arg1) {
            const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_245cd5c49157e602: function(arg0) {
            const ret = new Date(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_new_2e2be9617c4407d5: function() { return handleError(function (arg0) {
            const ret = new ResizeObserver(getObject(arg0));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_358bba68c164c0c7: function() {
            const ret = new Error();
            return addHeapObject(ret);
        },
        __wbg_new_361308b2356cecd0: function() {
            const ret = new Object();
            return addHeapObject(ret);
        },
        __wbg_new_3eb36ae241fe6f44: function() {
            const ret = new Array();
            return addHeapObject(ret);
        },
        __wbg_new_dd2b680c8bf6ae29: function(arg0) {
            const ret = new Uint8Array(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_new_from_slice_a3d2629dc1826784: function(arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return addHeapObject(ret);
        },
        __wbg_new_no_args_1c7c842f08d00ebb: function(arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        },
        __wbg_new_with_buffer_source_sequence_and_options_60e4700b934de2bb: function() { return handleError(function (arg0, arg1) {
            const ret = new Blob(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_with_length_a2c39cbe88fd8ff1: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_new_with_record_from_str_to_blob_promise_17d3b40dbba6c99d: function() { return handleError(function (arg0) {
            const ret = new ClipboardItem(getObject(arg0));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_with_text_c4caedd46c3e5f01: function() { return handleError(function (arg0, arg1) {
            const ret = new SpeechSynthesisUtterance(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_with_u8_array_sequence_and_options_cc0f8f2c1ef62e68: function() { return handleError(function (arg0, arg1) {
            const ret = new Blob(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_node_e1f24f89a7336c2e: function(arg0) {
            const ret = getObject(arg0).node;
            return addHeapObject(ret);
        },
        __wbg_now_2c95c9de01293173: function(arg0) {
            const ret = getObject(arg0).now();
            return ret;
        },
        __wbg_now_a3af9a2f4bbaa4d1: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_now_ebffdf7e580f210d: function(arg0) {
            const ret = getObject(arg0).now();
            return ret;
        },
        __wbg_observe_1ae37077cf10b11b: function(arg0, arg1, arg2) {
            getObject(arg0).observe(getObject(arg1), getObject(arg2));
        },
        __wbg_of_f915f7cd925b21a5: function(arg0) {
            const ret = Array.of(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_offsetTop_e3d5b0a34b3200fc: function(arg0) {
            const ret = getObject(arg0).offsetTop;
            return ret;
        },
        __wbg_open_ea44acde696d3b0c: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_origin_a9c891fa602b4d40: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).origin;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_performance_06f12ba62483475d: function(arg0) {
            const ret = getObject(arg0).performance;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_performance_7a3ffd0b17f663ad: function(arg0) {
            const ret = getObject(arg0).performance;
            return addHeapObject(ret);
        },
        __wbg_pixelStorei_2a65936c11b710fe: function(arg0, arg1, arg2) {
            getObject(arg0).pixelStorei(arg1 >>> 0, arg2);
        },
        __wbg_pixelStorei_f7cc498f52d523f1: function(arg0, arg1, arg2) {
            getObject(arg0).pixelStorei(arg1 >>> 0, arg2);
        },
        __wbg_port_dc56bc76d55c2b55: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).port;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_postMessage_2041f4e90af61318: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).postMessage(getObject(arg1));
        }, arguments); },
        __wbg_preventDefault_cdcfcd7e301b9702: function(arg0) {
            getObject(arg0).preventDefault();
        },
        __wbg_process_3975fd6c72f520aa: function(arg0) {
            const ret = getObject(arg0).process;
            return addHeapObject(ret);
        },
        __wbg_protocol_4c3b13957de7d079: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).protocol;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_prototypesetcall_bdcdcc5842e4d77d: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));
        },
        __wbg_push_8ffdcb2063340ba5: function(arg0, arg1) {
            const ret = getObject(arg0).push(getObject(arg1));
            return ret;
        },
        __wbg_queueMicrotask_0aa0a927f78f5d98: function(arg0) {
            const ret = getObject(arg0).queueMicrotask;
            return addHeapObject(ret);
        },
        __wbg_queueMicrotask_5bb536982f78a56f: function(arg0) {
            queueMicrotask(getObject(arg0));
        },
        __wbg_randomFillSync_f8c153b79f285817: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).randomFillSync(takeObject(arg1));
        }, arguments); },
        __wbg_readPixels_55b18304384e073d: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
        }, arguments); },
        __wbg_readPixels_95b2464a7bb863a2: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
        }, arguments); },
        __wbg_readyState_1bb73ec7b8a54656: function(arg0) {
            const ret = getObject(arg0).readyState;
            return ret;
        },
        __wbg_removeEventListener_e63328781a5b9af9: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
        }, arguments); },
        __wbg_removeItem_f6369b1a6fa39850: function() { return handleError(function (arg0, arg1, arg2) {
            getObject(arg0).removeItem(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_remove_31c39325eee968fc: function(arg0) {
            getObject(arg0).remove();
        },
        __wbg_requestAnimationFrame_43682f8e1c5e5348: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
            return ret;
        }, arguments); },
        __wbg_require_b74f47fc2d022fd6: function() { return handleError(function () {
            const ret = module.require;
            return addHeapObject(ret);
        }, arguments); },
        __wbg_resolve_002c4b7d9d8f6b64: function(arg0) {
            const ret = Promise.resolve(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_revokeObjectURL_ba5712ef5af8bc9a: function() { return handleError(function (arg0, arg1) {
            URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_right_154af6c2b1bf0c89: function(arg0) {
            const ret = getObject(arg0).right;
            return ret;
        },
        __wbg_scissor_2ff8f18f05a6d408: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).scissor(arg1, arg2, arg3, arg4);
        },
        __wbg_scissor_b870b1434a9c25b4: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).scissor(arg1, arg2, arg3, arg4);
        },
        __wbg_search_1b385e665c888780: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).search;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_send_df553c0b04f76a3a: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).send(getObject(arg1));
        }, arguments); },
        __wbg_setAttribute_cc8e4c8a2a008508: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setItem_cf340bb2edbd3089: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).setItem(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setProperty_cbb25c4e74285b39: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setTimeout_eff32631ea138533: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
            return ret;
        }, arguments); },
        __wbg_set_6cb8631f80447a67: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
            return ret;
        }, arguments); },
        __wbg_set_autofocus_7125a4a223a1d570: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).autofocus = arg1 !== 0;
        }, arguments); },
        __wbg_set_binaryType_5bbf62e9f705dc1a: function(arg0, arg1) {
            getObject(arg0).binaryType = __wbindgen_enum_BinaryType[arg1];
        },
        __wbg_set_box_73d3355c6f95f24d: function(arg0, arg1) {
            getObject(arg0).box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
        },
        __wbg_set_download_781b1800b8ba28de: function(arg0, arg1, arg2) {
            getObject(arg0).download = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_height_f21f985387070100: function(arg0, arg1) {
            getObject(arg0).height = arg1 >>> 0;
        },
        __wbg_set_href_d58528c85ef24c47: function(arg0, arg1, arg2) {
            getObject(arg0).href = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_once_56ba1b87a9884c15: function(arg0, arg1) {
            getObject(arg0).once = arg1 !== 0;
        },
        __wbg_set_onclose_d382f3e2c2b850eb: function(arg0, arg1) {
            getObject(arg0).onclose = getObject(arg1);
        },
        __wbg_set_onerror_377f18bf4569bf85: function(arg0, arg1) {
            getObject(arg0).onerror = getObject(arg1);
        },
        __wbg_set_onmessage_2114aa5f4f53051e: function(arg0, arg1) {
            getObject(arg0).onmessage = getObject(arg1);
        },
        __wbg_set_onopen_b7b52d519d6c0f11: function(arg0, arg1) {
            getObject(arg0).onopen = getObject(arg1);
        },
        __wbg_set_pitch_91774e1f0bbc52fa: function(arg0, arg1) {
            getObject(arg0).pitch = arg1;
        },
        __wbg_set_rate_63dfcd5b7bcdbc07: function(arg0, arg1) {
            getObject(arg0).rate = arg1;
        },
        __wbg_set_tabIndex_eb89b6ffe111cd2c: function(arg0, arg1) {
            getObject(arg0).tabIndex = arg1;
        },
        __wbg_set_type_148de20768639245: function(arg0, arg1, arg2) {
            getObject(arg0).type = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_type_abc37fa3c213f717: function(arg0, arg1, arg2) {
            getObject(arg0).type = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_value_62a965e38b22b38c: function(arg0, arg1, arg2) {
            getObject(arg0).value = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_volume_789cc971c19a2e24: function(arg0, arg1) {
            getObject(arg0).volume = arg1;
        },
        __wbg_set_width_d60bc4f2f20c56a4: function(arg0, arg1) {
            getObject(arg0).width = arg1 >>> 0;
        },
        __wbg_shaderSource_32425cfe6e5a1e52: function(arg0, arg1, arg2, arg3) {
            getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
        },
        __wbg_shaderSource_8f4bda03f70359df: function(arg0, arg1, arg2, arg3) {
            getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
        },
        __wbg_shiftKey_5558a3288542c985: function(arg0) {
            const ret = getObject(arg0).shiftKey;
            return ret;
        },
        __wbg_shiftKey_564be91ec842bcc4: function(arg0) {
            const ret = getObject(arg0).shiftKey;
            return ret;
        },
        __wbg_size_e05d31cc6049815f: function(arg0) {
            const ret = getObject(arg0).size;
            return ret;
        },
        __wbg_speak_67796aeb0b5fd194: function(arg0, arg1) {
            getObject(arg0).speak(getObject(arg1));
        },
        __wbg_speechSynthesis_95b40351572bb250: function() { return handleError(function (arg0) {
            const ret = getObject(arg0).speechSynthesis;
            return addHeapObject(ret);
        }, arguments); },
        __wbg_stack_d87a83f5bc721084: function(arg0, arg1) {
            const ret = getObject(arg1).stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_12837167ad935116: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_stopPropagation_6e5e2a085214ac63: function(arg0) {
            getObject(arg0).stopPropagation();
        },
        __wbg_style_0b7c9bd318f8b807: function(arg0) {
            const ret = getObject(arg0).style;
            return addHeapObject(ret);
        },
        __wbg_subarray_a96e1fef17ed23cb: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_texImage2D_087ef94df78081f0: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
        }, arguments); },
        __wbg_texImage2D_e71049312f3172d9: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
        }, arguments); },
        __wbg_texParameteri_0d45be2c88d6bad8: function(arg0, arg1, arg2, arg3) {
            getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        },
        __wbg_texParameteri_ec937d2161018946: function(arg0, arg1, arg2, arg3) {
            getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        },
        __wbg_texSubImage2D_19ae4cadb809f264: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
        }, arguments); },
        __wbg_texSubImage2D_d17a39cdec4a3495: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
        }, arguments); },
        __wbg_then_0d9fe2c7b1857d32: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        },
        __wbg_then_b9e7b3b5f1a9e1b5: function(arg0, arg1) {
            const ret = getObject(arg0).then(getObject(arg1));
            return addHeapObject(ret);
        },
        __wbg_top_3d27ff6f468cf3fc: function(arg0) {
            const ret = getObject(arg0).top;
            return ret;
        },
        __wbg_touches_55ce167b42bcdf52: function(arg0) {
            const ret = getObject(arg0).touches;
            return addHeapObject(ret);
        },
        __wbg_type_9a3860e6dd3a4156: function(arg0, arg1) {
            const ret = getObject(arg1).type;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_type_e8c7fade6d73451b: function(arg0, arg1) {
            const ret = getObject(arg1).type;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_uniform1i_9f3f72dbcb98ada9: function(arg0, arg1, arg2) {
            getObject(arg0).uniform1i(getObject(arg1), arg2);
        },
        __wbg_uniform1i_e9aee4b9e7fe8c4b: function(arg0, arg1, arg2) {
            getObject(arg0).uniform1i(getObject(arg1), arg2);
        },
        __wbg_uniform2f_1887b1268f65bfee: function(arg0, arg1, arg2, arg3) {
            getObject(arg0).uniform2f(getObject(arg1), arg2, arg3);
        },
        __wbg_uniform2f_2aa77a6395d47f1d: function(arg0, arg1, arg2, arg3) {
            getObject(arg0).uniform2f(getObject(arg1), arg2, arg3);
        },
        __wbg_useProgram_e82c1a5f87d81579: function(arg0, arg1) {
            getObject(arg0).useProgram(getObject(arg1));
        },
        __wbg_useProgram_fe720ade4d3b6edb: function(arg0, arg1) {
            getObject(arg0).useProgram(getObject(arg1));
        },
        __wbg_userAgent_34463fd660ba4a2a: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).userAgent;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_value_e506a07878790ca0: function(arg0, arg1) {
            const ret = getObject(arg1).value;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_versions_4e31226f5e8dc909: function(arg0) {
            const ret = getObject(arg0).versions;
            return addHeapObject(ret);
        },
        __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        },
        __wbg_vertexAttribPointer_adbd1853cce679ad: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        },
        __wbg_viewport_174ae1c2209344ae: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).viewport(arg1, arg2, arg3, arg4);
        },
        __wbg_viewport_df236eac68bc7467: function(arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).viewport(arg1, arg2, arg3, arg4);
        },
        __wbg_width_5f66bde2e810fbde: function(arg0) {
            const ret = getObject(arg0).width;
            return ret;
        },
        __wbg_width_7444cca5dfea0645: function(arg0) {
            const ret = getObject(arg0).width;
            return ret;
        },
        __wbg_writeText_be1c3b83a3e46230: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).writeText(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        },
        __wbg_write_d429ce72e918e180: function(arg0, arg1) {
            const ret = getObject(arg0).write(getObject(arg1));
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 382, function: Function { arguments: [Externref], shim_idx: 58, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_3971, __wasm_bindgen_func_elem_2334);
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 382, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 58, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_3971, __wasm_bindgen_func_elem_2334);
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 382, function: Function { arguments: [], shim_idx: 384, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_3971, __wasm_bindgen_func_elem_3982);
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 57, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 58, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2012, __wasm_bindgen_func_elem_2334);
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 57, function: Function { arguments: [NamedExternref("Event")], shim_idx: 58, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2012, __wasm_bindgen_func_elem_2334);
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 57, function: Function { arguments: [], shim_idx: 195, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2012, __wasm_bindgen_func_elem_2013);
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000007: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000008: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000009: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        },
        __wbindgen_object_clone_ref: function(arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        },
        __wbindgen_object_drop_ref: function(arg0) {
            takeObject(arg0);
        },
    };
    return {
        __proto__: null,
        "./peer_client_limi_draw_bg.js": import0,
    };
}

function __wasm_bindgen_func_elem_3982(arg0, arg1) {
    wasm.__wasm_bindgen_func_elem_3982(arg0, arg1);
}

function __wasm_bindgen_func_elem_2334(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_2334(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_2013(arg0, arg1) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wasm_bindgen_func_elem_2013(retptr, arg0, arg1);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}


const __wbindgen_enum_BinaryType = ["blob", "arraybuffer"];


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];
const KexFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_kex_free(ptr >>> 0, 1));
const KeysFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_keys_free(ptr >>> 0, 1));
const ParamsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_params_free(ptr >>> 0, 1));

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export3(addHeapObject(e));
    }
}

let heap = new Array(128).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('peer_client_limi_draw_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };

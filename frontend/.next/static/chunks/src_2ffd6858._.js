(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/store/todoSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/store/todoSlice.ts
__turbopack_context__.s({
    "addTodo": (()=>addTodo),
    "default": (()=>__TURBOPACK__default__export__),
    "removeTodo": (()=>removeTodo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$7$2e$0_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.7.0_react-redux@9.2.0_@types+react@19.1.2_react@19.1.0_redux@5.0.1__react@19.1.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
// --- Initial state
const initialState = {
    items: []
};
// --- Create the slice
const todoSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$7$2e$0_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'todos',
    initialState,
    reducers: {
        // Accepts a payload of type Todo
        addTodo: (state, action)=>{
            state.items.push(action.payload);
        },
        // Optional: remove a todo by id
        removeTodo: (state, action)=>{
            state.items = state.items.filter((todo)=>todo.id !== action.payload);
        }
    }
});
const { addTodo, removeTodo } = todoSlice.actions;
const __TURBOPACK__default__export__ = todoSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$7$2e$0_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.7.0_react-redux@9.2.0_@types+react@19.1.2_react@19.1.0_redux@5.0.1__react@19.1.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$todoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/todoSlice.ts [app-client] (ecmascript)");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$7$2e$0_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        todos: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$todoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/providers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-redux@9.2.0_@types+react@19.1.2_react@19.1.0_redux@5.0.1/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_2ffd6858._.js.map
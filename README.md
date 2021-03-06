# eslint-plugin-rxjs

This repo is a WIP.

Eventually, it will contain ESLint versions of the rules in the [`rxjs-tslint-rules`](https://github.com/cartant/rxjs-tslint-rules) package.

# Install

Install the ESLint TypeScript parser using npm:

```
npm install @typescript-eslint/parser --save-dev
```

Install the package using npm:

```
npm install eslint-plugin-rxjs --save-dev
```

Configure the `parser` and the `parserOptions` for ESLint. Here, I use a `.eslintrc.js` file for the configuration:

```js
const { join } = require("path");
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    project: join(__dirname, "./tsconfig.json"),
    sourceType: "module"
  },
  plugins: ["rxjs"],
  extends: [],
  rules: {
    "rxjs/no-async-subscribe": "error",
    "rxjs/no-ignored-observable": "error",
    "rxjs/no-ignored-subscription": "error",
    "rxjs/no-nested-subscribe": "error",
    "rxjs/no-unbound-methods": "error",
    "rxjs/throw-error": "error"
  }
};
```

# Rules

The package includes the following rules:

| Rule | Description | Recommended |
| --- | --- | --- |
| [`ban-observables`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/ban-observables.ts) | Forbids the use of banned observables. | TBD |
| [`ban-operators`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/ban-operators.ts) | Forbids the use of banned operators. | TBD |
| [`finnish`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/finnish.ts) | Enforces the use of Finnish notation. | TBD |
| [`just`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/just.ts) | Enforces the use of a `just` alias for `of`. | TBD |
| [`no-async-subscribe`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-async-subscribe.ts) | Forbids passing `async` functions to `subscribe`. | TBD |
| [`no-compat`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-compat.ts) | Forbids importation from locations that depend upon `rxjs-compat`. | TBD |
| [`no-connectable`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-connectable.ts) | Forbids operators that return connectable observables. | TBD |
| [`no-create`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-create.ts) | Forbids the calling of `Observable.create`. | TBD |
| [`no-explicit-generics`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-explicit-generics.ts) | Forbids explicit generic type arguments. | TBD |
| [`no-exposed-subjects`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-exposed-subjects.ts) | Forbids exposed  (i.e. non-private) subjects. | TBD |
| [`no-finnish`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-finnish.ts) | Forbids the use of Finnish notation. | TBD |
| [`no-ignored-error`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-ignored-error.ts) | Forbids the calling of `subscribe` without specifying an error handler. | TBD |
| [`no-ignored-notifier`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-ignored-notifier.ts) | Forbids observables not composed from the `repeatWhen` or `retryWhen` notifier. | TBD |
| [`no-ignored-observable`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-ignored-observable.ts) | Forbids the ignoring of observables returned by functions. | TBD |
| [`no-ignored-replay-buffer`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-ignored-replay-buffer.ts) | Forbids using `ReplaySubject`, `publishReplay` or `shareReplay` without specifying the buffer size. | TBD |
| [`no-ignored-subscribe`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-ignored-subscribe.ts) | Forbids the calling of `subscribe` without specifying arguments. | TBD |
| [`no-ignored-subscription`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-ignored-subscription.ts) | Forbids ignoring the subscription returned by `subscribe`. | TBD |
| [`no-ignored-takewhile-value`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-ignored-takewhile-value.ts) | Forbids ignoring the value within `takeWhile`. | TBD |
| [`no-implicit-any-catch`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-implicit-any-catch.ts) | Like the [`no-implicit-any-catch` rule](https://github.com/typescript-eslint/typescript-eslint/pull/2202) in `@typescript-eslint/eslint-plugin`, but for the `catchError` operator instead of `catch` clauses. | TBD |
| [`no-index`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-index.ts) | Forbids the importation from index modules - for the reason, see [this issue](https://github.com/ReactiveX/rxjs/issues/4230). | TBD |
| [`no-internal`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-internal.ts) | Forbids the importation of internals. | TBD |
| [`no-nested-subscribe`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-nested-subscribe.ts) | Forbids the calling of `subscribe` within a `subscribe` callback. | TBD |
| [`no-redundant-notify`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-redundant-notify.ts) | Disallows redundant notifications from completed or errored observables. | TBD |
| [`no-sharereplay`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-sharereplay.ts) | Forbids using the `shareReplay` operator. | TBD |
| [`no-subclass`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-subclass.ts) | Forbids subclassing RxJS classes. | TBD |
| [`no-subject-unsubscribe`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-subject-unsubscribe.ts) | Forbids calling the `unsubscribe` method of a subject instance. | TBD |
| [`no-subject-value`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-subject-value.ts) | Forbids accessing the `value` property of a `BehaviorSubject` instance. | TBD |
| [`no-tap`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-tap.ts) | Forbids the use of the `tap` operator. | TBD |
| [`no-topromise`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-topromise.ts) | Forbids the use of the `toPromise` method. | TBD |
| [`no-unbound-methods`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-unbound-methods.ts) | Forbids the passing of unbound methods. | TBD |
| [`no-unsafe-catch`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-unsafe-catch.ts) | Forbids unsafe `catchError` usage in effects and epics. | TBD |
| [`no-unsafe-first`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-unsafe-first.ts) | Forbids unsafe `first`/`take` usage in effects and epics. | TBD |
| [`no-unsafe-subject-next`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-unsafe-subject-next.ts) | Forbids unsafe optional `next` calls. | TBD |
| [`no-unsafe-switchmap`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-unsafe-switchmap.ts) | Forbids unsafe `switchMap` usage in effects and epics. | TBD |
| [`no-unsafe-takeuntil`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/no-unsafe-takeuntil.ts) | Forbids the application of operators after `takeUntil`. | TBD |
| [`prefer-observer`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/prefer-observer.ts) | Forbids the passing separate callbacks to `subscribe` and `tap`. | TBD |
| [`suffix-subjects`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/suffix-subjects.ts) | Enforces the use of a suffix in subject identifiers. | TBD |
| [`throw-error`](https://github.com/cartant/eslint-plugin-rxjs/blob/main/source/rules/throw-error.ts) | Enforces the passing of `Error` values to error notifications. | TBD |
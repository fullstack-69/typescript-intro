# TypeScript (FS69)

An introductory TypeScript project for the FullStack 69 course, covering core TypeScript concepts through lecture examples.

## Topics Covered

| File | Topic |
|------|-------|
| `lecture/01_intro.ts` | Basic types and IntelliSense |
| `lecture/02_type_inference_vs_specification.ts` | Type inference vs. explicit annotation, `interface` vs `type` |
| `lecture/03_more_type_demo.ts` | Complex object types, union types, optional properties, literal types |
| `lecture/04_type_extension.ts` | Extending interfaces |
| `lecture/05_function.ts` | Typed function parameters and return types |
| `lecture/06_generics.ts` | Generic interfaces |

## Setup

```bash
pnpm install
```

## Compile

```bash
pnpm tsc
```

Output is emitted to `./dist`.

## Tech Stack

- **TypeScript** 6+
- **Node.js** (LTS)
- **tsconfig bases**: `@tsconfig/node-lts`, `@tsconfig/node-ts`
- **Package manager**: pnpm

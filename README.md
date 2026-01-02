# autoyear

A lightweight React component that automatically renders the current year — perfect for copyright notices in footers.

**No more manually updating the year every January!** 🎉

## Installation

```bash
npm install autoyear
# or
yarn add autoyear
# or
pnpm add autoyear
```

## Usage

### Basic Year Display

```tsx
import { AutoYear } from "autoyear";

function Footer() {
  return (
    <footer>
      <p>
        Copyright <AutoYear />
      </p>
    </footer>
  );
}
// Renders: Copyright 2026
```

### Full Copyright Line

```tsx
import { Copyright } from "autoyear";

function Footer() {
  return (
    <footer>
      <Copyright name="Acme Inc" />
    </footer>
  );
}
// Renders: © 2026 Acme Inc
```

### With Year Range

```tsx
import { Copyright } from "autoyear";

function Footer() {
  return (
    <footer>
      <Copyright startYear={2020} name="Acme Inc" />
    </footer>
  );
}
// Renders: © 2020-2026 Acme Inc
```

### Custom Styling

```tsx
import { AutoYear, Copyright } from 'autoyear';

// With custom element and class
<AutoYear as="strong" className="text-primary" />

// With inline styles
<Copyright
  name="My Company"
  style={{ fontWeight: 'bold', color: '#666' }}
/>
```

## API

### `<AutoYear />`

| Prop        | Type                          | Default  | Description            |
| ----------- | ----------------------------- | -------- | ---------------------- |
| `as`        | `keyof JSX.IntrinsicElements` | `'span'` | HTML element to render |
| `className` | `string`                      | -        | CSS class name         |
| `style`     | `React.CSSProperties`         | -        | Inline styles          |

### `<Copyright />`

| Prop        | Type                          | Default  | Description                               |
| ----------- | ----------------------------- | -------- | ----------------------------------------- |
| `as`        | `keyof JSX.IntrinsicElements` | `'span'` | HTML element to render                    |
| `className` | `string`                      | -        | CSS class name                            |
| `style`     | `React.CSSProperties`         | -        | Inline styles                             |
| `prefix`    | `string`                      | `'©'`    | Prefix before the year                    |
| `name`      | `string`                      | -        | Name after the year                       |
| `startYear` | `number`                      | -        | Starting year for range (e.g., 2020-2026) |
| `separator` | `string`                      | `' '`    | Separator between parts                   |

## Why use autoyear?

- **Zero configuration** — Just import and use
- **Tiny bundle** — Less than 1KB gzipped
- **TypeScript ready** — Full type definitions included
- **Flexible** — Works with any styling solution
- **SSR compatible** — Works with Next.js, Remix, etc.

## License

MIT © Max Limsukhawat

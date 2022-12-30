# React `useCollapsible`

![CI](https://github.com/tywayne/react-usecollapsible/actions/workflows/ci.yml/badge.svg?branch=main)
![NPM](https://img.shields.io/npm/v/react-usecollapsible)
![Minzipped Size](https://img.shields.io/bundlephobia/minzip/react-usecollapsible)
![Peer Dependency, React](https://img.shields.io/npm/dependency-version/react-usecollapsible/peer/react)

React hook for easily creating accessible collapsed content.

- Written in TypeScript
- Handles all of the accessibility props, so you can focus on styling
- Flexibility - not tied to any single animation pattern, you control how (or if) it animates.
- Nested collapsible content areas
- Controlled component, gives you state and a setter, and lets you handle the rest.

# Installation

```sh
npm i react-usecollapsible
```

# Usage

## Basic Usage

```tsx
import { useCollapsible } from 'react-usecollapsible';

const Collapsible = () => {
  const { triggerProps, contentProps } = useCollapsible();

  return (
    <>
      <div {...triggerProps}>Toggle</div>
      <div {...contentProps}>Collapsible content</div>
    </>
  );
};
```

## Default Expanded

```tsx
import { useCollapsible } from 'react-usecollapsible';

const Collapsible = () => {
  const { triggerProps, contentProps } = useCollapsible({
    defaultExpanded: true,
  });

  return (
    <>
      <div {...triggerProps}>Toggle</div>
      <div {...contentProps}>Collapsible content</div>
    </>
  );
};
```

## Control Expansion

```tsx
import { useCollapsible } from 'react-usecollapsible';

const Collapsible = () => {
  const { expanded, setExpanded, triggerProps, contentProps } = useCollapsible({
    defaultExpanded: true,
  });

  return (
    <>
      <div {...triggerProps} onClick={() => setExpanded((e) => !e)}>
        {expanded ? 'Hide' : 'Show'}
      </div>
      <div {...contentProps} style={{ display: expanded ? 'block' : 'none' }}>
        Collapsible content
      </div>
    </>
  );
};
```

# API

## Hook Arguments

| Property          | Type      | Default | Description                              |
| ----------------- | --------- | ------- | ---------------------------------------- |
| `defaultExpanded` | `boolean` | `false` | Initial state of the collapsible content |

## Hook Response

| Property       | Type                                            | Description                              |
| -------------- | ----------------------------------------------- | ---------------------------------------- |
| `expanded`     | `boolean`                                       | Initial state of the collapsible content |
| `setExpanded`  | `React.Dispatch<React.SetStateAction<boolean>>` | Initial state of the collapsible content |
| `triggerProps` | `TriggerProps`                                  | Initial state of the collapsible content |
| `contentProps` | `ContentProps`                                  | Initial state of the collapsible content |

# FAQ

<details>
  <summary>Why isn't my content area hiding or showing when I toggle the state?</summary>

This is likely because you need to style your content based on the expanded state. To give maximum flexibility in _how_ you'd like to animate (or not animate) the expansion, styling is left completely up to you.

This hook controls how accessibility tools see the content, not how it looks visually.

</details>

<details>
  <summary>Will you ever expand this to add animations?</summary>
  
  Not likely. This is purposefully simplified to only control the accessibility properties of collapsible content.

Feel free to use this hook as a dependency on a component package that implements animations if you'd like!

</details>

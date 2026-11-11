# 1. Styles
- copy /abstracts folder into /src/styles
- uncomment additionalData: `@use '@/styles/abstracts' as *;` in `vite.config` or `next.config`

====================================================
# REDUX SETUP

## 1. copy folders from `shared_components` project:

- /src/components/_utility/providers/providers.js_

- /src/services/
- /src/store/

## 2. Plug in `<Providers>`

### A. **Vite**:

in "/src/App.jsx" wrap `<Wrapper>` with `<Providers>`:

```jsx
return (
  <Providers>
    <Wrapper>{''}</Wrapper>
  </Providers>
);
```

### B. **Next**:

in "/src/app/layout.jsx" wrap `<Wrapper>` with `<Providers>`:

```jsx
return (
  <html
    lang='en'
    // className={`${inter.variable} ${unbounded.variable}`} // fonts
  >
    <body>
      <Providers>
        <Wrapper>{children}</Wrapper>
      </Providers>
    </body>
  </html>
);
```

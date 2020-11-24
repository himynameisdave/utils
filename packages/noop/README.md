<div align="center" margin="0 auto 20px">
  <h1>@himynameisdave/utils.noop</h1>
  <p style="font-style: italic;">
    No-operation. It doesn't do anything.
  </p>
  <div>
    <a href="https://lerna.js.org/">
      <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna badge" />
    </a>
  </div>
</div>

---

No-operation. It doesn't do anything. Useful as a default value for function callbacks (a callback fallback, if you will).

### Examples

```typescript
import noop from '@himynameisdave/utils.noop';


function someFn(callback = noop) {
  callback(); // Should be safe to call.
}
```

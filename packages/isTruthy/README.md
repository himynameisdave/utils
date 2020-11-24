<div align="center" margin="0 auto 20px">
  <h1>@himynameisdave/utils.isTruthy</h1>
  <p style="font-style: italic;">
    Test if a given element is truthy.
  </p>
  <div>
    <a href="https://lerna.js.org/">
      <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna badge" />
    </a>
  </div>
</div>

---

Test if a given element is [truthy](https://gomakethings.com/truthiness-in-javascript/) (by casting input to a boolean).

### Examples

```typescript
import isTruthy from '@himynameisdave/utils.isTruthy';

isTruthy(true); // true
isTruthy(false); // false
isTruthy(1); // true
isTruthy(0); // false
isTruthy('foo'); // true
isTruthy(''); // false
isTruthy([1,2,3]); // true
```

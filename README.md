## 리덕스 사용 예시

```
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'

// ...

const { isOpen, props } = useAppSelector((state) => state.modal)
const dispatch = useAppDispatch()

// ...

return (
  <div>
    <div onClick={() => dispatch(openModal( -- 프롭스 -- ))}>모달</div>
    {isOpen && <div>{props}</div>}
  </div>
)
```

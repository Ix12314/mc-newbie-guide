## 1. 鏋舵瀯璁捐

```mermaid
flowchart TD
    "鍓嶇 React SPA" --> "React Router"
    "React Router" --> "棣栭〉"
    "React Router" --> "鏁欑▼椤?
    "React Router" --> "鏇村閾炬帴椤?
    "棣栭〉" --> "Mock 鏁版嵁"
    "鏁欑▼椤? --> "Mock 鏁版嵁"
    "鏇村閾炬帴椤? --> "澶栭儴閾炬帴"
```

## 2. 鎶€鏈鏄?- 鍓嶇锛歊eact@18 + Tailwind CSS@3 + Vite
- 鍒濆鍖栧伐鍏凤細vite-init
- 鍚庣锛氭棤锛堢函鍓嶇椤圭洰锛?- 鏁版嵁锛歁ock 鏁版嵁鍐呯疆浜庡墠绔唬鐮佷腑

## 3. 璺敱瀹氫箟
| 璺敱 | 鐢ㄩ€?|
|-------|---------|
| / | 棣栭〉锛屾矇娴稿紡 Hero + 鏍稿績鐗硅壊 + 蹇€熷叆闂?|
| /tutorials | 鏁欑▼椤碉紝鎼滅储绛涢€?+ 鏁欑▼鍒楄〃 + 璇︽儏灞曞紑 |
| /links | 鏇村閾炬帴椤碉紝鍒嗙被澶栭儴璧勬簮閾炬帴 |

## 4. API 瀹氫箟
鏃犲悗绔?API锛屾墍鏈夋暟鎹娇鐢ㄥ墠绔?Mock 鏁版嵁銆?
## 5. 鏁版嵁妯″瀷
鏁欑▼鏁版嵁缁撴瀯锛?```typescript
interface Tutorial {
  id: string;
  title: string;
  category: 'survival' | 'crafting' | 'combat' | 'building' | 'redstone' | 'farming';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  description: string;
  steps: { title: string; content: string; tip?: string }[];
}

interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'official' | 'community' | 'tools' | 'media';
  icon: string;
}
```

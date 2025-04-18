![image](https://github.com/user-attachments/assets/5ed68d05-6b2f-4445-8741-d3b19b48c264)PARD 5기 웹파트 3차 세미나 과제

-구조 components에 modal.tsx작성
![alt text](image-2.png)


-게시물 클릭하면 뜨는창 
![alt text](image.png)

-하트 유지
눌러놓고 나갔다와도 하트가 유지됩니다.
![alt text](image-1.png)

-댓글 
![alt text](image-3.png)


코드

![image](https://github.com/user-attachments/assets/b5a1a762-67e8-4b36-9c38-9dd0722e5f1d)
comments: 댓글 리스트 상태.

![image](https://github.com/user-attachments/assets/8c0d88a1-2cb8-4545-8136-c3f1656a584f)
![image](https://github.com/user-attachments/assets/d4b3a60a-e55a-49f3-bad2-9be78b3dac3f)
comments 배열을 순회하면서 댓글 올려줌

![image](https://github.com/user-attachments/assets/0eb157e7-e74b-4830-84a9-90e850935c54)
위에 Love를 누를떄마다 True or False로 설정해서 바뀌게 만들었습니다.

++ onchange 헷갈려서 다시 정리해봅니다.
onChange={(e) => setNewComment(e.target.value)}
e =  input 요소에 변화가 생겼을 때 발생하는 이벤트
e.target.value = 현재 입력된 텍스트 값
setNewComment를 통해 갱신 


#### 4차 과제
zustand를 이용해서 연동되게 만들었습니다!!
![image](https://github.com/user-attachments/assets/dd456e54-b253-4ba6-abc3-57da26b1462a)
![image](https://github.com/user-attachments/assets/19675f1f-a455-4ee4-b88c-bbb428816804)
![image](https://github.com/user-attachments/assets/6ceac8f7-ecdd-4a74-abfd-b8296b85e0bb)
마찬가지로 프로필 편집을 눌러도 바꿀수 있습니다.

![image](https://github.com/user-attachments/assets/4d59deed-2d19-491b-902b-3f199cdc1a3c)
![image](https://github.com/user-attachments/assets/280e9ad7-02ba-4169-b3f3-ac1f61e379aa)
![image](https://github.com/user-attachments/assets/e0688877-2c94-451c-8536-b26a8075d22f)

media를 사용해서 구현해봤습니다
태블릿 뷰 
![image](https://github.com/user-attachments/assets/a0793344-6bd3-4bc3-8371-5ffd87a9ba2b)

모바일 뷰에서 사이드바가 displaynone을 해도 일정 자리를 차지하는 문제가 발생했습니다. ㅠㅠ 
진짜 많은 걸 해봤는데 해결이 안됩니다..ㅜ
![image](https://github.com/user-attachments/assets/d2011ab5-24d8-489f-b5b4-15a5128e5471)

감사합니다.~~~~~~~~


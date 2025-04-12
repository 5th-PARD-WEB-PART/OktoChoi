PARD 5기 웹파트 3차 세미나 과제

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

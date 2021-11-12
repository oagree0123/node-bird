export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '오어그리',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg',
    }, {
      src: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    }, {
      src: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg',
    }],
    Comments: [{
      User: {
        nickname: 'ohyes',
      },
      content: '이것은 더미데이터 입니다!',
    }, {
      User: {
        nickname: 'ohyes',
      },
      content: '두번째 더미데이터 입니다!',
    }]
  }],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost= {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '오어그리',
  },
  Images: [],
  Comment: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
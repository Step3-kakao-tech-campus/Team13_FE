import API from "@/constants/API.js";
import { rest } from "msw";

const sonnyFundInfo1 = {
  fundId: 1,
  fundTitle:
    "손흥민 주장된 기념 지하철 광고 🎉🎉 축구중독자가 책임지고 펀딩합니다 ❤️‍🔥",
  thumbnailUrl:
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg",
  targetDate: "2023-12-17",
  targetMoney: "3000000",
  currentMoney: "2340000",
  celebrityId: "sonny",
  celebrityName: "손흥민",
  celebrityProfileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  organizerId: "soccer123",
  organizerName: "축구도사",
  isInUserWishList: true,
};

const sonnyFundDetailInfo1 = {
  fundId: 1,
  fundTitle:
    "손흥민 주장된 기념 지하철 광고 🎉🎉 축구중독자가 책임지고 펀딩합니다 ❤️‍🔥",
  thumbnailUrl:
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg",
  createdAt: "2023-10-24",
  targetDate: "2023-12-17",
  targetMoney: "3000000",
  currentMoney: "2340000",
  participantNumber: 43,
  celebrityId: "sonny",
  celebrityName: "손흥민",
  celebrityProfileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  isFollowing: true,
  celebrityFollowerNum: 3450,
  organizerId: "soccer123",
  organizerName: "축구도사",
  organizerProfileUrl:
    "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg",
  likeCount: 218,
  isInUserWishList: true,
  isOrganizer: true,
};

const sonnyFundInfo2 = {
  fundId: 2,
  fundTitle: "쏘니 폼 미쳤다 토트넘역 지하철 광고판 달자",
  thumbnailUrl:
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltaf10a2ea551a3e54/6360dc8f67675010b765f257/GettyImages-1432946487.jpg",
  targetDate: "2023-12-24",
  targetMoney: "5000000",
  currentMoney: "100000",
  celebrityId: "sonny",
  celebrityName: "손흥민",
  celebrityProfileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  isFollowing: false,
  organizerId: "soccer234",
  organizerName: "싸커이삼사",
  isInUserWishList: false,
};

const sonnyFundDetailInfo2 = {
  fundId: 2,
  fundTitle: "쏘니 폼 미쳤다 토트넘역 지하철 광고판 달자",
  thumbnailUrl:
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltaf10a2ea551a3e54/6360dc8f67675010b765f257/GettyImages-1432946487.jpg",
  createdAt: "2023-10-02",
  targetDate: "2023-12-24",
  targetMoney: "5000000",
  currentMoney: "100000",
  participantNumber: 60,
  celebrityId: "sonny",
  celebrityName: "손흥민",
  celebrityProfileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  celebrityFollowerNum: 3450,
  organizerId: "soccer234",
  organizerProfileUrl:
    "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg",
  organizerName: "싸커이삼사",
  likeCount: 350,
  isInUserWishList: false,
  isOrganizer: false,
};

export const fundHandlers = [
  // 펀딩 목록 조회
  rest.get("/api" + API.FUND.LIST, (req, res, ctx) => {
    const keyword = req.url.searchParams.get("keyword");
    const pageIndex = req.url.searchParams.get("pageIndex");
    const sortType = req.url.searchParams.get("sortType");

    if (!pageIndex) return res(ctx.status(400, "pageIndex 없음"));

    return res(
      ctx.status(200),
      ctx.json({
        isLastPage: false,
        currentPage: pageIndex,
        fundList: Array.from({ length: 12 }, (_, i) =>
          i % 2 ? sonnyFundInfo2 : sonnyFundInfo1,
        ),
        keyword: keyword,
        sortType: sortType,
      }),
    );
  }),

  // 펀딩 좋아요
  rest.post("/api" + API.FUND.LIKE, (req, res, ctx) => {
    const { fundId } = req.body;

    if (!fundId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 펀딩입니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "성공적으로 찜 목록에 추가했습니다" }),
    );
  }),

  // 펀딩 좋아요 취소
  rest.delete("/api" + API.FUND.LIKE, (req, res, ctx) => {
    const { fundId } = req.body;

    if (!fundId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 펀딩입니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "성공적으로 찜 목록에서 제거했습니다" }),
    );
  }),

  // 공동관리자 조회
  rest.get("/api" + API.FUND.CO_ADMIN(":fundId"), (req, res, ctx) => {
    const { fundId } = req.params;

    if (!fundId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 펀딩입니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        coAdminList: [
          {
            userId: "j8won",
            profileUrl: "https://avatars.githubusercontent.com/u/75734220?v=4",
            nickname: "경주원",
          },
          {
            userId: "sihyonn",
            profileUrl:
              "https://avatars.githubusercontent.com/u/124874266?s=80&v=4",
            nickname: "김시현",
          },
          {
            userId: "Klomachenko",
            profileUrl: "https://avatars.githubusercontent.com/u/102893954?v=4",
            nickname: "이규민",
          },
        ],
      }),
    );
  }),

  // 펀딩 상세 정보 조회
  rest.get("/api" + API.FUND.DETAIL(":fundId"), (req, res, ctx) => {
    const { fundId } = req.params;

    switch (fundId) {
      case "1":
        return res(ctx.status(200), ctx.json(sonnyFundDetailInfo1));
      case "2":
        return res(ctx.status(200), ctx.json(sonnyFundDetailInfo2));
      default:
        return res(
          ctx.status(400),
          ctx.json({ message: "존재하지 않는 펀딩입니다" }),
        );
    }
  }),

  // 펀딩 소개글 조회
  rest.get("/api" + API.FUND.INTRODUCTION(":fundId"), (req, res, ctx) => {
    const { fundId } = req.params;
    const intro =
      '<p>sdfdsfdsfsdfsdf</p><h1>sdfjdsfkljfajskl;sdfkdjfksdkflsdajfkldjskljfklsadjfsdlkflksdfklskdjflksd</h1><ul><li>sfsdfasdf</li><li>dsfsadfsdfsda</li><li class="ql-indent-8">fdsfsdoifjasjfdsjfjkdsakjfhsdljkfhkjsdhfkshdjkfhsdjkhfsdhlkfhjsdfdf</li></ul><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/dc1c8_pX2Q0?showinfo=0"></iframe><img src="data:image/jpeg;base64,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" style="" width="284"></p><ol><li>dfdfsd</li><li>sfddsfsdf</li><li class="ql-indent-1">sdfsdfsd</li><li class="ql-indent-2">fdsfsdfsfd</li><li class="ql-indent-3">fsfsdf</li><li class="ql-indent-3">fsdfs</li><li class="ql-indent-4">sfdfs</li><li class="ql-indent-3">fdfs</li><li class="ql-indent-2">sfsffsd</li><li class="ql-indent-2">sfsdfdsf</li><li class="ql-indent-2">sfdsf</li><li class="ql-indent-1">sdfdsfsdf</li><li class="ql-indent-1">sfdsfsd</li><li>sffdsfsfsd</li></ol><p><br></p><p>dfdfd</p><h6>ddfd</h6><h5>dfdfd</h5><h4>dfddfd</h4><p>dfdfdfd</p><h3>dfdfdfdfdfd</h3><h2>fsdfsfs</h2><h1>sfsdfsdfsdfsfdsfsdf<em>fdsfsdf</em></h1><p><br></p><p><a href="https://www.youtube.com/watch?v=dc1c8_pX2Q0" rel="noopener noreferrer" target="_blank">안녕하세요</a></p><h2>저의 이름은</h2><p>경주원입니다요</p><p>지금<em>은 펀더링 프로<u>젝트에 참여</u></em><s>중이에요</s></p><blockquote>그럼 안녕!</blockquote><blockquote><br></blockquote><blockquote><br></blockquote><ol><li>1111</li><li>222</li></ol><ul><li>333</li><li>333444</li></ul><ol><li>sfsdfdsfsdfs</li><li>sfdfdsfds</li><li>fsfsdfsdfds</li><li>f fsfdf</li><li class="ql-indent-1">sdfsdfsdf</li><li class="ql-indent-2">sfsdfdfdsfs</li><li class="ql-indent-2">fsdfd</li><li class="ql-indent-1">fdsdfsdf</li><li>dfsfs</li></ol><p><br></p><ul><li>sfdfdsf</li><li>sdfsdf</li><li>sfdsf</li><li class="ql-indent-1 ql-align-justify">sdfsfsdf</li><li class="ql-indent-1 ql-align-right">sfsff</li></ul><p class="ql-align-center"><br></p><p class="ql-align-center">dfsdfsfd<span style="background-color: rgb(230, 0, 0);">sdfdfsdd</span></p><p class="ql-align-center"><span style="background-color: rgb(230, 0, 0);">sfsdfsdf</span></p><p><span style="color: rgb(255, 153, 0);">dsfdsfsdfsdfsdf</span></p>';

    if (!fundId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 펀딩입니다" }),
      );
    }

    return res(ctx.status(200), ctx.json({ introduction: intro }));
  }),
];

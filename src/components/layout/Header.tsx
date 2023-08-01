import * as S from "./Header.styles";

export default function Header(){

    
    return (
        <S.Header>
            <S.TopWrap className="top-wrap">
                <S.Logo className="hide">
                    <S.HomeHref href="/">
                        <img src="/images/logo.svg" alt="" />
                    </S.HomeHref>
                </S.Logo>

                <S.Util className="util-wrap">
                    <S.UtilItem className="login">
                        <S.Login href="#">로그인</S.Login>
                    </S.UtilItem>
                    <S.UtilItem className="sign">
                        <S.Sign href="#">회원가입</S.Sign>
                    </S.UtilItem>
                </S.Util>
            </S.TopWrap> 

            <S.MySwiper></S.MySwiper>
            <S.Gnb className="gnb">
                <S.Li>
                    <S.Href href="#">자유게시판</S.Href>
                </S.Li>
                <S.Li>
                    <S.Href href="#">중고마켓</S.Href>
                </S.Li>
                <S.Li>
                    <S.Href href="#">마이페이지</S.Href>
                </S.Li>
            </S.Gnb>
        </S.Header>
    )
}
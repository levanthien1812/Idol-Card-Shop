import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  GitHub,
  FacebookRounded,
  Twitter,
  HomeRounded,
  EmailRounded,
  PhoneRounded,
} from "@mui/icons-material";
import ShopeeIcon from "../../assets/images/shopee.png";

function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted mt-5"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Liên lạc với chúng tôi qua các nền tảng mạng xã hội:</span>
        </div>

        <div>
          <a href="#!" className="me-4 text-reset btn-link">
            <FacebookRounded />
          </a>
          <a href="#!" className="me-4 text-reset">
            <Twitter />
          </a>
          <a
            href="https://github.com/levanthien1812/Idol-Card-Shop"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a href="#!" className="me-4 text-reset">
            <img src={ShopeeIcon} alt="Shopee Icon" width={24} height={24} />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">IDOL CARD SHOP</h6>
              <p>
                Dòng sản phẩm Idol Card Shop cung cấp chính là các vật phẩm kỷ
                niệm liên quan đến các thần tượng Hàn Quốc, được dùng cho mục
                đích sưu tầm, trang trí hoặc cho mục đích thời trang.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Sản phẩm tiêu biểu
              </h6>
              <p>
                <a href="/products/?category=album" className="text-reset">
                  Album
                </a>
              </p>
              <p>
                <a href="/products/?category=photocard" className="text-reset">
                  Photocard
                </a>
              </p>
              <p>
                <a href="/products/?category=lightstick" className="text-reset">
                  Lightstick
                </a>
              </p>
              <p>
                <a href="/products/?category=poster" className="text-reset">
                  Poster
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p className="d-flex justify-content-md-start justify-content-center">
                <HomeRounded sx={{ marginRight: 2 }} />
                Đại học Công nghệ thông tin, ĐHQG
              </p>
              <p className="d-flex justify-content-md-start justify-content-center">
                <EmailRounded sx={{ marginRight: 2 }} />
                idolcardshop@gm.uit.vn
              </p>
              <p className="d-flex justify-content-md-start justify-content-center">
                <PhoneRounded sx={{ marginRight: 2 }} />
                0123456789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="#!">
          IdolCardShop.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;

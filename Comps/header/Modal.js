import { Modal, Form, Input, Radio } from "antd";
import { useState } from "react";
import ReactCodeInput from "react-verification-code-input";
import { checkExistsAuth, generateCode, checkCode,registerAuth } from "../auth/authRequests";

const Login = ({ visible, setVisible }) => {
  const [formitem, setFormitem] = useState("phone");
  const [codeSent, setCodeSent] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [code, setCode] = useState();

  const handleCheckPhone = (value) => {
    let body = {
      phone_number: "998" + value.phoneNumber,
    };
    setPhoneNumber("998" + value.phoneNumber);
    const successFunc = ({ data }) => {
      setFormitem("code");
      setIsExist(data.data.isExist);
      generateCode(null, body);
    };
    const errorFunc = (err) => {
      console.log(err);
    };
    checkExistsAuth(null, body, successFunc, errorFunc);
  };
  const handleSMS = () => {
    let body = {
      phone_number: phoneNumber,
      code: code,
    };
    if (!isExist) {
      checkCode(null, body, successFunc,errorFunc);
      setFormitem("");
    }else {
      registerAuth(null, body, successFunc,errorFunc)
      setVisible(false)
      setFormitem("phone");
    }
    const successFunc = ({ data }) => {
      console.log(data);
    };
    const errorFunc = (err) => {
      console.log(err);
    };
  };
  const Phone = () => {
    return (
      <div>
        <h3>Davom ettirish uchun kiring yoki ro’yxatdan o’ting</h3>
        <Form layout="vertical" onFinish={handleCheckPhone}>
          <Form.Item label="Telefon raqam" name="phoneNumber">
            <Input
              prefix="+998"
              // type="number"
              maxLength={9}
              size="large"
              placeholder="90 372 12 34"
            />
          </Form.Item>
          <button
            type="submit"
            // onClick={() => setFormitem("code")}
            className="modal-btn"
          >
            Kodni qabul qilish
          </button>
        </Form>
      </div>
    );
  };

  const SMScode = () => {
    return (
      <div>
        <h3>Kodni kiriting</h3>
        <p>
          <b>+998 99 827 43 96</b> raqamiga SMS-kod yuborildi
        </p>
        <p className="change-number" onClick={() => setFormitem("phone")}>
          Raqami o’zgartirish
        </p>
        <div className="sms-code-input">
          <ReactCodeInput onComplete={(e) => setCode(e)} />
        </div>
        <p>
          Yangi kodni <b>00:56</b> dan keyin qabul qilishingiz mumkin{" "}
        </p>
        <button onClick={() => handleSMS()} className="modal-btn">
          Davom etish
        </button>
      </div>
    );
  };

  const SingUp = () => {
    return (
      <div>
        <h3>Ro’yxatdan o’tish</h3>
        <Form layout="vertical" onFinish={() => {}}>
          <Form.Item label="Ism" name="name">
            <Input size="large" placeholder="Ismingizni kiriting" />
          </Form.Item>
          <Form.Item label="Ism" name="surname">
            <Input size="large" placeholder="Familiyangizni kiriting" />
          </Form.Item>
          <Form.Item label="Ism" name="radio">
            <Radio>
              Platformaning barcha{" "}
              <a>
                <span className="link-code">shartlariga</span>
              </a>{" "}
              roziman
            </Radio>
          </Form.Item>
          <button onClick={()=>setVisible(false)} className="modal-btn">Tugalash</button>
        </Form>
      </div>
    );
  };

  return (
    <div>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={400}
      >
        {formitem === "phone" ? (
          <Phone />
        ) : formitem === "code" ? (
          <SMScode />
        ) : (
          <SingUp />
        )}
      </Modal>
    </div>
  );
};

export default Login;

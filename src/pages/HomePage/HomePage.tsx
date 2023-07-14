import { Button, Form, Input } from "antd";
import { IForm } from "../../types/IForm";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { loginUser } from "../../store/slices/userAsync/userAsync";
import { useEffect } from "react";
import { selectIsAuth } from "../../store/slices/userSelectors/userSelectors";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();
  const onSubmit = (values: IForm) => {
    dispatch(loginUser(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/private");
    }
  }, [isAuth]);

  return (
    <div>
      <h1>Авторизация</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HomePage;

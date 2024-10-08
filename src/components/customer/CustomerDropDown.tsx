import { PlusOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { useNavigate } from "react-router-dom"; // Use react-router-dom for navigation
import { usePopup } from "../../context/PopupContext";
import { AddCustomerDrawer } from "../../drawers/customer/AddCustomerDrawer";

const CustomerDropButton = () => {
  const { openDrawer } = usePopup();
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button
          size="small"
          type="link"
          rel="noopener noreferrer"
          className="text-sm text-black"
          onClick={() => openDrawer(<AddCustomerDrawer />)}
        >
          Single Customer
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="link"
          size="small"
          className="text-sm text-black"
          onClick={() => navigate("import-customers")}
        >
          Import Customer List
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} placement="bottom">
        <Button type="primary" className="flex items-center">
          Add Customer
          <PlusOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default CustomerDropButton;
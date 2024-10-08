import { Button, Drawer } from "antd";
// import Survey from "../../views/projects/Survey";/

export type Props = {
  title: string;
  open: boolean;
  close: () => void;
  submitText: string;
  // Survey: FormItem[];
};

export default function FormPopup(props: Props) {
  // const survey = props.Survey;
  // const [checkedItems, setCheckedItems] = useState<boolean[]>(
  //   Survey.map(() => true)
  // );
  // const [reset, setReset] = useState<boolean>(false);

  // const handleCheckboxChange = (index: number) => {
  //   const newCheckedItems = [...checkedItems];
  //   newCheckedItems[index] = !newCheckedItems[index];
  //   setCheckedItems(newCheckedItems);
  // };

  // const filteredList = Survey.filter((_, index) => checkedItems[index]);

  // const columns = [
  //   {
  //     title: <Checkbox />,
  //     width: 50,
  //     render: (_: any, __: any, index: number) => (
  //       <Checkbox
  //         checked={checkedItems[index]}
  //         onChange={() => handleCheckboxChange(index)}
  //       />
  //     ),
  //   },
  //   {
  //     title: "Item",
  //     dataIndex: "label",
  //     key: "label",
  //     render: (text: string) => (
  //       <div className="flex items-center space-x-4">
  //         <img src={Dots} alt="" />
  //         <span>{text}</span>
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <div>
      <Drawer
        closeIcon={null}
        width={500}
        footer={
          <div className="flex items-center justify-end py-2 space-x-3">
            <Button onClick={props.close} className="">
              Cancel
            </Button>
            <Button type="primary" className="px-8 ">
              {props.submitText}
            </Button>
          </div>
        }
        title={
          <div className="between-align">
            <p className="formPopuptitle">{props.title}</p>
            {/* <Button
              onClick={() => setReset(true)}
              type="default"
              className="text-[#595959]"
            >
              Customize Form
            </Button> */}
          </div>
        }
        open={props.open}
        onClose={props.close}
      >
        {/* <DynamicForm survey={filteredList} /> */}
      </Drawer>

      {/* <Modal
        title="Reset Form Fields"
        closeIcon={null}
        open={reset}
        onCancel={() => setReset(false)}
        okText="Reset"
        onOk={() => setReset(false)}
      >
        <div className="max-w-[calc(100vw-2rem)] bg-white rounded-lg mt-5 border-t-[1.5px] border-[#E9EAEB] shadow-sm shadow-[#E9EAEB] space-y-[24px]">
          <Table<FormItem>
            dataSource={Survey}
            columns={columns}
            size="small"
            pagination={false}
            rowKey="label"
          />
        </div>
      </Modal> */}
    </div>
  );
}
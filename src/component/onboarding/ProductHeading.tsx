import { UpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { expandProductDetatails } from "../../redux/productsSlice";
import { productsState } from "../../types";

interface Props {
  productLabel: string;
  id: string;
}
const ProductHeading = (props: Props) => {
  const { expandedProductId } = useSelector(
    (state: productsState) => state.products
  );
  const dispatch = useDispatch();

  const handleExpandProductDetails = () => {
    dispatch(
      expandProductDetatails(expandedProductId === props.id ? "" : props.id)
    );
  };

  return (
    <div
      className="flex items-center justify-between w-full"
      onClick={handleExpandProductDetails}
    >
      <div className="space-y-1 w-full">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-primary text-xl">
            {props.productLabel}
          </p>
          <UpOutlined
            className={twMerge(
              expandedProductId === props.id && "rotate-180 duration-200"
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductHeading;
// import { forwardRef } from "react";
// const ForwardRefComponent = (props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// };
// export default forwardRef(ForwardRefComponent);

// FOLLOWING FORMULA IS RECOMENDED IN VERSION 19.WE CANT USE IN V18
const ForwardRefComponent = (props) => {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  );
};
export default ForwardRefComponent;

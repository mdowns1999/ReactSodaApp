import classes from "./CustomSoda.module.css";
import CustomSodaForm from "./CustomSodaForm";

// const MyCheckBoxList = [
//     {
//       order: 0,
//       name: "Angular"
//     },
//     {
//       order: 1,
//       name: "React"
//     },
//     {
//       order: 2,
//       name: "Java"
//     },
//     {
//       order: 4,
//       name: "Python"
//     },
//     {
//       order: 3,
//       name: "JavaScript"
//     }
//   ];

// const Checkbox = ({ object, onChange }) => {
//     return (
//       <>
//         <input
//           type="checkbox"
//           id={`checkbox-${object.index}`}
//           name={object.name}
//           value={object.checked}
//           onChange={() => onChange({ ...object, checked: !object.checked })}
//         />
//         {object.name}
//       </>
//     );
//   };


const CustomSodas = () => {

  return (
    <>
      <section className={classes.customDetailBox}>
      <img
          src={require("../../images/blank.png")}
          alt="Custom Soda"
        ></img>
        <div>
          <h1>Custom Drink</h1>
          <p>
            A bunch of example text. A bunch of example text. A bunch of example
            text. A bunch of example text. A bunch of example text. A bunch of
            example text. A bunch of example text. A bunch of example text. A
            bunch of example text. A bunch of example text. A bunch of example
            text. A bunch of example text. A bunch of example text. A bunch of
            example text.
          </p>
        </div>
      </section>
      <section className={classes.customFormBox}>
        <CustomSodaForm/>
      </section>
    </>
  );
};

export default CustomSodas;



// export default function App() {
//   const [data, setData] = useState(
//     MyCheckBoxList.sort((a, b) => a.order - b.order)
//   );

//   const isVerified = useMemo(() => {
//     return data.every((d) => d.checked);
//   }, [data]);

//   return (
//     <div className="App">
//       {data.map((obj, index) => (
//         <li key={index}>
//           <Checkbox
//             obj={obj}
            // onChange={(item) => {
            //   setData(data.map((d) => (d.order === item.order ? item : d)));
            // }}
//           />
//         </li>
//       ))}
//       <button disabled={!isVerified}>Final button</button>
//     </div>
//   );
// }
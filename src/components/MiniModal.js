import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Success from "./Success";
import { useAuth } from "../context/Auth";

let arrayDate = [];

const BudgetModal = () => {
  // for getting the values, do it how we did in the login

  // let arrayDate = [];

  const [date, setDate] = useState(new Date());
  console.log(date);

  const onChange = (date) => {
    setDate(date);
    arrayDate.push(date);
    console.log("array:", arrayDate);
  };

  // clear array after pushing the date
  arrayDate = [];

  // let first = date.getDate();

  // if (date) {
  //   console.log("date is clicked:");
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="flex items-center justify-center text-center text-[#7C4CE0]">
      <div className="space-y-4">
        <h1>Create Budget</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full items-center space-y-10 text-gray-900"
        >
          <div>
            <input
              type="text"
              id="budgetname"
              name="budgetname"
              placeholder="Enter Budget Name"
              required
              className="focus:shadow-outline text-md mt-2 h-12 appearance-none rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
              // value={budgetname}
              // onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              required
              className="focus:shadow-outline text-md h-12 appearance-none rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
              // value={amount}
              // onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div className="space-y-4 capitalize text-gray-900">
            <h3 className="text-md font-medium">Pick start date</h3>
            <div className="bg-[#F1F1F4] px-8 py-4">
              <Calendar
                className={`bg-[#F1F1F4] px-8 py-4`}
                onChange={onChange}
                value={date}
              />
            </div>
            {/* <div>
              <input type="text" value={arrayDate} />
            </div> */}
          </div>

          {/* blessedmadukoma@gmail.com, blessed100 */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#7C4CE08A] p-3 font-semibold tracking-wider text-white"
          >
            {/* {loading ? "Please wait..." : "Login"} */}
            Create Budget
          </button>
        </form>
      </div>
    </section>
  );
};

const ExpenseModal = () => {
  // for getting the values, do it how we did in the login

  // let arrayDate = [];

  const [date, setDate] = useState(new Date());
  console.log(date);

  const onChange = (date) => {
    setDate(date);
    arrayDate.push(date);
    console.log("array:", arrayDate);
  };

  // clear array after pushing the date
  arrayDate = [];

  // let first = date.getDate();

  // if (date) {
  //   console.log("date is clicked:");
  // }

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  console.log("showSuccess:", showSuccess);
  console.log("showError:", showError);

  const { handleAddExpense, expense } = useAuth();

  const [expenseData, setExpenseData] = useState({
    tag: "",
    description: "",
    amount: "",
    date: date,
  });

  const { tag, description, amount } = expenseData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (expenseData.tag == "") {
      alert("Please select a tag!");
      return;
    } else if (expenseData.description == "") {
      alert("Please add a description!");
      return;
    } else if (expenseData.amount == "") {
      alert("Please add an amount!");
      return;
    }

    handleAddExpense(expenseData);

    console.log("response data 2:", expense);

    console.log("showSuccess:", showSuccess);
    console.log("showError:", showError);

    const expenseAmount = expense?.expense?.amount;
    const expenseDescription = expense?.expense?.description;

    if (expenseAmount !== "" && expenseDescription !== "") {
      setShowSuccess(!showSuccess);
    } else {
      setShowError(!showError);
    }

    // if successfully added to db, show success modal
    // setShowSuccess(true);

    console.log("showSuccess:", showSuccess);
    console.log("showError:", showError);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("submitted 1");
  //   alert("submitted 1");
  // };

  const handleInputChange = (e) => {
    setExpenseData({
      ...expenseData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="flex items-center justify-center text-center text-[#7C4CE0]">
      {showSuccess === true && showError === false ? (
        <Success
          isVisible={showSuccess}
          onClose={() => setShowSuccess(false)}
        />
      ) : showSuccess === false && showError === true ? (
        <Error isVisible={showError} onClose={() => setShowError(false)} />
      ) : (
        ""
      )}

      <div className="space-y-6">
        <h1>Add Expense</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full items-center space-y-10 text-gray-900"
        >
          <div>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              // className="focus:shadow-outline text-md h-12 appearance-none rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
              value={amount}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="flex justify-between space-x-8">
            <div className="flex flex-col justify-between">
              <select
                name="tag"
                id="tag"
                className="block rounded-lg bg-[#F1F1F4] py-4 px-4"
                value={tag}
                onChange={handleInputChange}
                required
              >
                <option>Tag</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="clothing">Clothing</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
              </select>

              <div>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description"
                  required
                  className="focus:shadow-outline text-md h-12 appearance-none rounded-md border border-gray-300 bg-[#F1F1F4] p-2.5 leading-normal focus:bg-white focus:outline-none"
                  value={description}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="space-y-4 capitalize text-gray-900">
              <Calendar
                className={`appearance-none rounded-xl border-none bg-[#F1F1F4] px-8 py-4`}
                onChange={onChange}
                value={date}
              />
              {/* <div>
          <input type="text" value={arrayDate} />
          </div> */}
            </div>
          </div>

          <button
            // type="submit"
            className="w-full rounded-lg bg-[#7C4CE0] p-3 font-semibold tracking-wider text-white"
            onClick={handleSubmit}
          >
            Add Expense
          </button>
        </form>
      </div>
    </section>
  );
};

const IncomeModal = () => {
  return <div>IncomeModal</div>;
};

export { BudgetModal, ExpenseModal, IncomeModal };

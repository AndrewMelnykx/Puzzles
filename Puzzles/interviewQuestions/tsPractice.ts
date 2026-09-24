function identity<T>(value: T): T {
  return value;
}

const numberResult = identity<number>(42);
const stringResult = identity<string>("hello");

const inferred = identity(true);
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Alice" },
  success: true,
};

interface UserApiResponse<T> {
  data: T;
}

let response: UserApiResponse<{ id: number; text: string }> = {
  data: {
    id: 1,
    text: "Hello",
  },
};

function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount: number) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount();

account.deposit(100);

console.log(account.getBalance());

let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

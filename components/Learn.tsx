"use client";

import { cn } from "@/lib/utils";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const Learn = () => {
  //variavbles
  let name: string | number = "ash";
  name = 123;

  //functions

  const foo = (name: string, age: number): void => {
    console.log("name and age");
  };

  foo("ram", 123);

  //components

  const [count, setCount] = useState(0);

  type ButtonProps = {
    color: string;
    size: string;
    pilled?: boolean;
    borderRadius: Record<string, number>;
    onclick: (test: number, test2: number) => void;
    children?: ReactNode;
    setCount: Dispatch<SetStateAction<number>>;
  };

  const Button = ({
    color,
    size,
    onclick,
    children,
    setCount,
  }: ButtonProps) => {
    return (
      <button className={cn(color, size)} onClick={(e) => onclick(123, 345)}>
        {children}
      </button>
    );
  };

  //Interface

  interface person {
    name: string;
    age: number;
    place?: string;
  }

  let person: person = {
    name: "ram",
    age: 20,
  };

  // a bit more component props

  type Button2Props = React.ComponentPropsWithoutRef<"button"> & {
    variant?: string;
  };

  /*using intercae

  interface Button2Props extends React.ComponentPropsWithoutRef<"button"> {
    variant: string;
  }
  */

  const handleClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("clicked");
  };

  const Button2 = ({ type, variant, ...rest }: Button2Props) => (
    <div>
      <button className={variant} {...rest} onClick={handleClick}>
        click me 2
      </button>
    </div>
  );

  // hooks

  type User = {
    name: string;
  } | null;

  //generics for functions <>
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    setUser({
      name: "sam",
    });
  }, []);

  //tips

  const buttonValues = [
    "click me",
    "click me again",
    "click me again and again",
  ] as const; //read-only now

  type User3 = {
    sessionId: string;
    name: string;
  };

  //guest will have session id only
  type Guest = Omit<User3, "name">;

  //GENERICS

  const convertToArray = <T,>(val: T): T[] => {
    return [val];
  };

  function converToArray2<T>(val: T): T[] {
    return [val];
  }

  convertToArray("2");

  type Button3Props<T> = {
    count: T;
    countHistory: T[];
  };

  function Button3<T>({ count, countHistory }: Button3Props<T>) {
    return <button>button 3</button>;
  }

  //UNKNOWN type
  //use instead of any if needed
  let x: unknown;

  x = 13;

  //GENERICS MORE I GUESS

  type APIResponse<
    Data = {
      status: number; //defualt value
    }
  > = {
    data: Data;
    status: boolean;
  };

  //generic data is passed in <{}>

  type userResponseType = APIResponse<{
    name: string;
  }>;

  // can make another userresponsetype with same apiresponse type
  type userResponseType2 = APIResponse<{
    name: string;
    age: number;
  }>;

  const response: userResponseType = {
    data: {
      name: "ram",
    },
    status: true,
  };

  const defaultResponse: APIResponse = {
    //defult we dont pass in any type in the <>
    data: {
      status: 20,
    },
    status: true,
  };

  type ApiResponse2<
    Data extends object = {
      data: null;
    }
  > = {
    data: Data;
    status: boolean;
  };

  const response2: ApiResponse2<{
    name: string;
    age: number;
  }> = {
    data: {
      name: "ram",
      age: 23,
    },
    status: true,
  };

  const defaultresponse2: ApiResponse2 = {
    data: {
      data: null,
    },
    status: true,
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      Learn
      <Button
        color="bg-red-600"
        size="w-20"
        borderRadius={{
          top: 32,
          bottom: 32,
        }}
        onclick={(test1, test2) => {
          // alert(test1 + test2);
          setCount((count) => count + 2);
        }}
        setCount={setCount}
      >
        click me {count}
      </Button>
      <Button2 type="button" autoFocus={true} variant="bg-green-300" />
      {buttonValues.map((btn) => (
        <button className="border w-fit p-2">{btn}</button>
      ))}
      <Button3 count={2} countHistory={[123]} />
    </div>
  );
};

export default Learn;

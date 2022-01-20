import { useState } from "react";

export function usePollReader(fetcher: any, initialVal: any = null) {
  const [data, setData] = useState(initialVal);

  const poll = () => fetcher().then((r: any) => {
    console.log("polled: ", r);
    setData(r);
  });

  const read = () => {
    if (data === null || (Array.isArray(data) && data.length === 0)) {
      throw poll();
    } else {
      return data;
    }
  };

  return {
    data: {
      read: () => read(),
    },
    poll,
  };
}

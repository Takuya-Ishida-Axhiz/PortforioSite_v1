import {
  CircularProgress,
  CircularProgressLabel,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
export const Circle = (props) => {
  const size = useBreakpointValue({ base: 120, md: 190 });
  const [isIndeterminate, setisIndeterminate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisIndeterminate(false);
    }, 300);
  });
  const { name, value, color } = props;
  return (
    <>
      <CircularProgress
        isIndeterminate={isIndeterminate}
        size={size}
        value={value}
        color={color}
        thickness="10px"
        capIsRound
      >
        <CircularProgressLabel fontSize={{ base: 17, md: 27 }}>
          {name}
        </CircularProgressLabel>
      </CircularProgress>
    </>
  );
};

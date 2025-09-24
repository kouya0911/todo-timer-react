import { useState } from "react";
import { VStack, HStack, Button, Text, Box } from "@chakra-ui/react";
import useTimer from "./useTimer";

const Timer = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <VStack spacing={4} align="start">
      <Button size="sm" onClick={() => setIsDisp(prev => !prev)}>
        {isDisp ? "非表示" : "表示"}
      </Button>
      {isDisp && <TimerFunc />}
    </VStack>
  );
};

const TimerFunc = () => {
  const { time, isRunning, toggle, reset } = useTimer();

  return (
    <VStack
      spacing={3}
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor="gray.200"
      align="start"
    >
      <Text fontSize="lg">
        <Box as="span" fontWeight="bold">{time}</Box> 秒経過
      </Text>
      <HStack spacing={3}>
        <Button colorScheme="teal" onClick={toggle}>
          {isRunning ? "一時停止" : "スタート"}
        </Button>
        <Button colorScheme="red" onClick={reset}>
          リセット
        </Button>
      </HStack>
    </VStack>
  );
};

export default Timer;

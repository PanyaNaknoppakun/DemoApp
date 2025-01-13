import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { myStyle } from "../styles/myStyles";

const ScrollViewExample = () => {
  const [developerContent, setContent] = useState({
    name: "???? ?..",
    content: "????",
  });
  return (
    <View style={myStyle.screenContainer}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={myStyle.header}>Hello react</Text>
        <Text style={myStyle.body}>
          My name is {developerContent.name}
          {"\n"}
          content: {developerContent.content}
        </Text>
        <Text style={myStyle.header}>
          Text generation Copy page Learn how to generate text from a prompt.
          OpenAI provides simple APIs to use a large language model to generate
          text from a prompt, as you might using ChatGPT. These models have been
          trained on vast quantities of data to understand multimedia inputs and
          natural language instructions. From these prompts, models can generate
          almost any kind of text response, like code, mathematical equations,
          structured JSON data, or human-like prose. Quickstart To generate
          text, you can use the chat completions endpoint in the REST API, as
          seen in the examples below. You can either use the REST API from the
          HTTP client of your choice, or use one of OpenAI's official SDKs for
          your preferred programming language. Text generation Copy page Learn
          how to generate text from a prompt. OpenAI provides simple APIs to use
          a large language model to generate text from a prompt, as you might
          using ChatGPT. These models have been trained on vast quantities of
          data to understand multimedia inputs and natural language
          instructions. From these prompts, models can generate almost any kind
          of text response, like code, mathematical equations, structured JSON
          data, or human-like prose. Quickstart To generate text, you can use
          the chat completions endpoint in the REST API, as seen in the examples
          below. You can either use the REST API from the HTTP client of your
          choice, or use one of OpenAI's official SDKs for your preferred
          programming language.
        </Text>
      </ScrollView>
    </View>
  );
};

export default ScrollViewExample;

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Simple Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Enter something..." value={inputValue} onChange={handleInputChange} />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleButtonClick}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;

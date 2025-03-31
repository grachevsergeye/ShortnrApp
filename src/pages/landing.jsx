import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The ultimate URL shortener <br /> for all your needs!😏👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-3"
      >
        <Input
          type="url"
          placeholder="Enter your loooong URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button type="submit" className="h-full cursor-pointer bg-red-900" variant="destructive">
          Shorten!
        </Button>
      </form>
      <img
        src="/banner1.jpg"
        className="w-full my-17 md:px-11"
      />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer">
            How does the Shortnr URL works?
          </AccordionTrigger>
          <AccordionContent>
          When you input a long URL, our system creates a shorter, 
          more convenient link that redirects to 
          the original URL when accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer">
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
          Yes, creating an account lets you manage your URLs,
          track analytics, 
          and customize your short links.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer">
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
          You can track the number of clicks, user locations, 
          and device types (mobile or desktop) for each shortened URL.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
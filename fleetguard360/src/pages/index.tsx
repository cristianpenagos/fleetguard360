import Button from "@/components/atoms/Button";
import InputMail from "@/components/atoms/InputMail"
import InputTel from "@/components/atoms/InputTel"
import Menu from "@/components/molecules/Menu";


export default function Home(){
  return (
    <div className="flex flex-row-reverse justify-around items-center">
      <div className="flex flex-col justify-around">
        <Menu />

      
      </div>
      <div className="JUSTIFY-E">
        <img src="/bus.png" alt="bus" />
      </div>

    </div>
  );
}
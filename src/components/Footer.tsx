import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-5 flex flex-col justify-center items-center gap-2">
      <Image width={133} height={23} src="/Logo.png" alt="Logo" />
      <p className="text-sm font-medium text-primary">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;

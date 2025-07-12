import Link from "next/link";
export default function Policy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between pt32">
      <p className="text-71717a font-geistMedium text-sm">
        ©️{currentYear} stayhub. All rights reserved.
      </p>
      <div className="flex items-center gap63">
        <Link className="font-geistNormal text-sm text-050505" href="/">
          Terms used
        </Link>
        <Link href="/">Privacy policy</Link>
      </div>
    </div>
  );
}

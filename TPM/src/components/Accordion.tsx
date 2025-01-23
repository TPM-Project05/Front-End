import { useContext, useEffect, useState, ReactNode, useRef, createContext } from "react";
import { FaChevronDown } from "react-icons/fa6";

// Menentukan tipe untuk context
interface AccordionContextType {
  selected: string | null;
  setSelected: (value: string | null) => void;
}

// Membuat context dengan tipe yang sesuai
const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  children: ReactNode;
  value: string | null;
  onChange?: (value: string | null) => void;
  className?: string; // Tambahkan className ke dalam props
}

export default function Accordion({
  children,
  value,
  onChange,
  className,
  ...props
}: AccordionProps) {
  const [selected, setSelected] = useState<string | null>(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul className={className} {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  trigger: ReactNode;
}

export function AccordionItem({ children, value, trigger, ...props }: AccordionItemProps) {
  const context = useContext(AccordionContext);

  // Pastikan context tidak null
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const { selected, setSelected } = context;
  const open = selected === value;

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <li className="border-b text-white pb-4" {...props}>
        <header
          role="button"
          onClick={() => setSelected(open ? null : value)}
          className="flex justify-between items-center py-4 font-medium text-2xl text-white hover:text-glow transition-all"
        >
          {trigger}
          <FaChevronDown
            size={16}
            className={`text-white transition-transform ${open ? "rotate-180" : ""}`}
          />
        </header>
      </li>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: open ? (ref.current?.offsetHeight || 0) : 0,
        }}
      >
        <div className="pb-4 font-[1100]" ref={ref}>
          {children}
        </div>
      </div>
    </>
  );
}
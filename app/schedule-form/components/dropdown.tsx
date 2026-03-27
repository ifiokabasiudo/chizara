// // "use client";
// // import { useState, useRef, useEffect } from "react";

// // type Option = {
// //   label: string;
// //   value: string;
// // };

// // type Props = {
// //   label: string;
// //   name: string;
// //   options: Option[];
// //   placeholder?: string;
// //   required?: boolean;
// //   onChange?: (value: string) => void;
// // };

// // export default function CustomDropdown({
// //   label,
// //   name,
// //   options,
// //   placeholder = "Select an option",
// //   required,
// //   onChange,
// // }: Props) {
// //   const [open, setOpen] = useState(false);
// //   const [selected, setSelected] = useState<Option | null>(null);
// //   const ref = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     function handleClickOutside(e: MouseEvent) {
// //       if (ref.current && !ref.current.contains(e.target as Node)) {
// //         setOpen(false);
// //       }
// //     }

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   function handleSelect(option: Option) {
// //     setSelected(option);
// //     setOpen(false);
// //     onChange?.(option.value);
// //   }

// //   return (
// //     <div ref={ref} className="relative">
// //       <label className="block mb-2 text-sm text-white">
// //         {label} {required && "(required)"}
// //       </label>

// //       {/* Trigger */}
// //       <button
// //         type="button"
// //         onClick={() => setOpen(prev => !prev)}
// //         className="
// //           w-full
// //           rounded-full
// //           border
// //           px-4
// //           py-3
// //           text-left
// //           bg-transparent
// //           text-white
// //           flex
// //           items-center
// //           justify-between
// //           hover:border-white/80
// //           transition
// //         "
// //       >
// //         <span className={selected ? "text-white" : "text-white/60"}>
// //           {selected?.label || placeholder}
// //         </span>

// //         <svg
// //           className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
// //           viewBox="0 0 20 20"
// //           fill="currentColor"
// //         >
// //           <path
// //             fillRule="evenodd"
// //             d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
// //             clipRule="evenodd"
// //           />
// //         </svg>
// //       </button>

// //       {/* Dropdown */}
// //       {open && (
// //         <div
// //           className="
// //             absolute
// //             z-50
// //             mt-2
// //             w-full
// //             rounded-2xl
// //             border
// //             bg-[#3f4a41]
// //             shadow-xl
// //             overflow-hidden
// //           "
// //         >
// //           {options.map(option => (
// //             <button
// //               key={option.value}
// //               type="button"
// //               onClick={() => handleSelect(option)}
// //               className="
// //                 w-full
// //                 text-left
// //                 px-4
// //                 py-3
// //                 text-white
// //                 hover:bg-white/10
// //                 transition
// //               "
// //             >
// //               {option.label}
// //             </button>
// //           ))}
// //         </div>
// //       )}

// //       {/* Hidden input for form submission */}
// //       <input
// //         type="hidden"
// //         name={name}
// //         value={selected?.value || ""}
// //         required={required}
// //       />
// //     </div>
// //   );
// // }

// "use client";
// import { useState, useRef, useEffect } from "react";

// type Option = {
//   label: string;
//   value: string;
// };

// type Props = {
//   label: string;
//   name: string;
//   options: Option[];
//   placeholder?: string;
//   required?: boolean;
//   onChange?: (value: string) => void;
// };

// export default function CustomDropdown({
//   label,
//   name,
//   options,
//   placeholder = "Select an option",
//   required,
//   onChange,
// }: Props) {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState<Option | null>(null);
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//         setSelected(null);          // ✅ reset selection
//         onChange?.("");             // ✅ clear parent state
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, [onChange]);

//   function handleSelect(option: Option) {
//     setSelected(option);
//     setOpen(false);
//     onChange?.(option.value);
//   }

//   return (
//     <div ref={ref} className="relative">
//       <label className="block mb-2 text-sm text-white">
//         {label} {required && "(required)"}
//       </label>

//       {/* Trigger */}
//       <button
//         type="button"
//         onClick={() => setOpen(prev => !prev)}
//         className="
//           w-full
//           rounded-full
//           border
//           px-4
//           py-3
//           text-left
//           bg-transparent
//           text-white
//           flex
//           items-center
//           justify-between
//           hover:border-white/80
//           transition
//         "
//       >
//         <span className={selected ? "text-white" : "text-white/60"}>
//           {selected?.label || placeholder}
//         </span>

//         <svg
//           className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div
//           className="
//             absolute
//             z-50
//             mt-2
//             w-full
//             rounded-2xl
//             border
//             bg-[#3f4a41]
//             shadow-xl
//             overflow-hidden
//           "
//         >
//           {options.map(option => (
//             <button
//               key={option.value}
//               type="button"
//               onClick={() => handleSelect(option)}
//               className="
//                 w-full
//                 text-left
//                 px-4
//                 py-3
//                 text-white
//                 hover:bg-white/10
//                 transition
//               "
//             >
//               {option.label}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Hidden input for form submission */}
//       <input
//         type="hidden"
//         name={name}
//         value={selected?.value || ""}
//         required={required}
//       />
//     </div>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  name: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  setIsGroupTherapy: React.Dispatch<React.SetStateAction<string>>;
  isGroupModal: boolean;
};

export default function CustomDropdown({
  label,
  name,
  options,
  placeholder = "Select an option",
  required,
  onChange,
  setIsGroupTherapy,
  isGroupModal,
}: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  console.log("The group modal? ", isGroupModal);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false); // ✅ close only
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option: Option) {
    setSelected(option);
    if (isGroupModal) {
      if (option.value === "group") {
        setIsGroupTherapy("group");
      } else {
        console.log("CLEARING GROUP");
        setIsGroupTherapy("");
      }
    }
    setOpen(false);
    onChange?.(option.value);
  }

  return (
    <div ref={ref} className="relative">
      <label className="block mb-2 text-white">
        {label} {required && "(required)"}
      </label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="
          w-full
          rounded-full
          border
          px-4
          py-3
          text-left
          bg-transparent
          text-white
          flex
          items-center
          justify-between
          hover:border-white/80
          transition
        "
      >
        <span className={selected ? "text-white" : "text-white/60"}>
          {selected?.label || placeholder}
        </span>

        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            z-50
            mt-2
            w-full
            rounded-2xl
            border
            bg-[#3f4a41]
            shadow-xl
            overflow-hidden
          "
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                handleSelect(option);
              }}
              className="
                w-full
                text-left
                px-4
                py-3
                text-white
                hover:bg-white/10
                transition
              "
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Hidden input */}
      <input
        type="hidden"
        name={name}
        value={selected?.value || ""}
        required={required}
      />
    </div>
  );
}

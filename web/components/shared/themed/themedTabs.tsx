import {
  ForwardRefExoticComponent,
  SVGProps,
  useEffect,
  useState,
} from "react";
import { Tab } from "@headlessui/react";
import { clsx } from "../clsx";
import { capitalizeWords } from "../utils/utils";

interface ThemedTabsProps {
  options: {
    label: string;
    icon: ForwardRefExoticComponent<
      SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
      }
    >;
  }[];
  onOptionSelect: (option: string) => void;
  initialIndex?: number;
}
export default function ThemedTabs(props: ThemedTabsProps) {
  const { options, onOptionSelect, initialIndex } = props;

  return (
    <div className="inline-flex px-2 sm:px-0">
      <Tab.Group defaultIndex={initialIndex}>
        <Tab.List className="flex space-x-1 rounded-lg bg-gray-200 shadow-sm p-0.5">
          {options.map((option, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                clsx(
                  "w-full flex flex-row rounded-md px-2.5 py-1.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-white shadow text-gray-900"
                    : " hover:cursor-pointer text-gray-500"
                )
              }
              onClick={() => onOptionSelect(option.label)}
            >
              {({ selected }) => (
                <div className="flex flex-row space-x-2 items-center">
                  <option.icon
                    className={clsx(
                      selected ? "text-sky-500" : "text-gray-500",
                      "w-5 h-5 inline-block"
                    )}
                  />
                  <span className="sr-only xl:not-sr-only ">
                    {option.label}
                  </span>
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

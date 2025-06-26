"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";

type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

export type CommandMap = Partial<Record<PackageManager, string>>;

interface TerminalInstallCommandsProps {
  commands: CommandMap;
}

export default function TerminalInstallCommands({
  commands,
}: TerminalInstallCommandsProps) {
  const packageManagers = Object.keys(commands) as PackageManager[];
  const [currentTab, setCurrentTab] = useState<PackageManager>(
    packageManagers[0]
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = commands[currentTab];
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto w-full font-mono">
      <Tabs
        defaultValue={currentTab}
        onValueChange={(val) => setCurrentTab(val as PackageManager)}
      >
        <TabsList className="flex space-x-2">
          {packageManagers.map((pkg) => (
            <TabsTrigger key={pkg} value={pkg} className="px-4 py-2 text-xs">
              {pkg}
            </TabsTrigger>
          ))}
        </TabsList>

        {packageManagers.map((pkg) => (
          <TabsContent key={pkg} value={pkg}>
            <div className="dark:bg-muted bg-background relative flex items-center justify-between rounded-md border px-4 py-2">
              <code className="truncate text-sm">{commands[pkg]}</code>
              <Button
                onClick={handleCopy}
                variant="ghost"
                className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

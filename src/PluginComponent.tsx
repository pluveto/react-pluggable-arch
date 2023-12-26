import { useCallback, useEffect, useState } from "react";

interface PluginComponentProps {
  pluginName: string;
}

interface IPlugin {
  name: string;
  version: string;
}

const PluginComponent = ({ pluginName }: PluginComponentProps) => {
  const [plugin, setPlugin] = useState<IPlugin | null>(null);
  const load = useCallback(async () => {
    try {
      try {
        const mod = (await import(`./plugins/${pluginName}/index.js`)).default;
        setPlugin(mod);
      } catch (error) {
        console.log(error);
        setPlugin(null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [pluginName]);

  useEffect(() => {
    load();
  }, [load, pluginName]);

  return (
    <div>
      Plugin Component
      {plugin && (
        <div>
          <div>Plugin Name: {plugin.name}</div>
          <div>Plugin Version: {plugin.version}</div>
        </div>
      )}
    </div>
  );
};

export default PluginComponent;

export declare type EventFilter = (event: Event) => boolean;
export declare type EventHandler<E extends Event> = (event: E) => void;
export declare type ModKey = "ctrl" | "shift" | "alt" | "meta";
export declare type KeyModifierName = "esc" | "tab" | "enter" | "space" | "up" | "down" | "del" | "left" | "right";
export declare type MouseModifierName = "left" | "right" | "middle";
export declare type ModKeyModifierName = ModKey | "noctrl" | "noshift" | "noalt" | "nometa";
export declare type StandaloneModifierName = "prevent" | "stop" | "self";
export declare type ModifierName = KeyModifierName | MouseModifierName | ModKeyModifierName | StandaloneModifierName | "keys" | "exact";
export declare type NextKeys<Keys extends ModifierName, K extends ModifierName> = K extends KeyModifierName | MouseModifierName | "keys" ? Exclude<Keys, KeyModifierName | MouseModifierName | "keys"> : K extends "exact" ? Exclude<Keys, ModKeyModifierName | "exact"> : K extends "ctrl" | "noctrl" ? Exclude<Keys, "ctrl" | "noctrl" | "exact"> : K extends "shift" | "noshift" ? Exclude<Keys, "shift" | "noshift" | "exact"> : K extends "alt" | "noalt" ? Exclude<Keys, "alt" | "noalt" | "exact"> : K extends "meta" | "nometa" ? Exclude<Keys, "meta" | "nometa" | "exact"> : Exclude<Keys, K>;
export declare type Modifier<Keys extends ModifierName> = {
    <E extends Event>(handler: EventHandler<E>): EventHandler<E>;
    (event: Event): void;
} & {
    [K in Keys]: K extends "keys" ? (...keys: (KeyModifierName | number)[]) => Modifier<NextKeys<Keys, K>> : K extends "exact" ? (...keys: ModKey[]) => Modifier<NextKeys<Keys, K>> : Modifier<NextKeys<Keys, K>>;
};
export declare const modifiers: Modifier<ModifierName>;

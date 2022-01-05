export type ElementType = 'fire' | 'water'// | 'wind' |'water'  

export interface CharacterResource {
    health: number,
    mana: number,
    energy: number,
    fury: number,
}

export interface CharacterAttributes {
    strength: number,
    agility: number,
    intelligence: number,
    spirit: number,
}

export interface CharacterEnhancements {
    // 暴击率
    criticalChance: number,
    // 暴击伤害
    criticalDamage: number,
    // 急速
    haste: number,
    // 元素精通
    elementMastery: {
        [key in ElementType]: number
    },
}

export interface Character {
    id: string,
    name: string,
    castingSkill?: Skill,
    castingTime?: number,
    staticResource: CharacterResource,
    realtimeResource?: CharacterResource,
    staticAttributes: CharacterAttributes,
    realtimeAttributes?: CharacterAttributes,
    staticEnhancements: CharacterEnhancements,
    realtimeEnhancements?: CharacterEnhancements,
    skills: Array<string>,
    slots: Array<Slot>
}

export interface Effect {
    type: 'damage' | 'dot',
    value: number,
    duration?: number,
    interval?: number
}

export interface Cost {
    type: 'mana' | 'energy' | 'health' | 'fury',
    value: number
}

export interface Skill {
    id: string,
    name: string,
    icon?: string,
    castTime: number,
    cooldown: number,
    cost: Array<Cost>,
    effect: Array<Effect>
    lastTriggerTime?: number,
}

export interface Slot {
    // id: number
    key?: string,
    link?: {
        type: 'skill',
        id: string,
        skill?: Skill
    }
}
const BrandIdSymbol = Symbol("EntityIdBrand");

type EntityIdBrand<T extends string> = {
	readonly [BrandIdSymbol]: {
		[key in T]: T
	};
}

export type EntityId<T extends string> = number & EntityIdBrand<T>;

export type Entity<T extends string> = {
	readonly id: EntityId<T>
}

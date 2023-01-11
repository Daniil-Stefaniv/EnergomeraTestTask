type FieldsDataType = fieldType[];

type fieldType = {
	$id: string;
	Id: number;
	Name: string;
	Size: number;
	IsRemoved: boolean;
	SyncId: string;
	Location: string;
	OrganizationId: number;
	SyncDate: Date;
};

export { FieldsDataType, fieldType };

/* eslint-disable */

export const AllTypesProps = {
	Mutation:{
		addCard:{
			card:{
				type:"createCard",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	SpecialSkills: "enum",
	Query:{
		cardById:{
			cardId:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	createCard:{
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		Children:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		Attack:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		Defense:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		skills:{
			type:"SpecialSkills",
			array:true,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Card:{
		attack:{
			cardID:{
				type:"String",
				array:true,
				arrayRequired:true,
				required:true
			}
		}
	}
}

export const ReturnTypes = {
	Mutation:{
		addCard:"Card"
	},
	Subscription:{
		deck:"Card"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Nameable:{
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		name:"String"
	},
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Card:{
		Attack:"Int",
		Children:"Int",
		Defense:"Int",
		attack:"Card",
		cardImage:"S3Object",
		description:"String",
		id:"ID",
		image:"String",
		name:"String",
		skills:"SpecialSkills"
	}
}
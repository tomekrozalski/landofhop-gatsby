import * as Yup from 'yup';

// import { constants } from 'utils';
// import { isValidDate } from 'dashboard/beverage/utils';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { Fermentation as FermentationEnum } from 'components/BeverageDetails/utils/enums';

export default Yup.object().shape({
  [FieldName.badge]: Yup.string()
    .min(3)
    .matches(/^[a-z\d-]+$/)
    .required(),
  // -----------
  [FieldName.name]: Yup.array()
    .of(
      Yup.object().shape({
        lang: Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        }),
        value: Yup.string()
          .min(1)
          .required(),
      }),
    )
    .required()
    .min(1),
  [FieldName.series]: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string()
        .min(3)
        .required(),
    }),
  ),
  [FieldName.brand]: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .required(),
  [FieldName.cooperation]: Yup.array()
    .min(1)
    .nullable(true),
  [FieldName.contract]: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  [FieldName.place]: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  [FieldName.tale]: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string()
        .min(12)
        .required(),
    }),
  ),
  [FieldName.barcode]: Yup.string()
    // null should be treated as correct option
    .transform(v => (v === null ? 'abdef' : v))
    .min(5)
    .required(),
  // -----------
  [FieldName.fermentation]: Yup.array()
    .of(Yup.mixed().oneOf(Object.values(FermentationEnum)))
    .min(1)
    .nullable(true),
  [FieldName.style]: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string()
        .min(3)
        .required(),
    }),
  ),
  [FieldName.extract]: Yup.object()
    .shape({
      value: Yup.number()
        .min(0)
        .max(100)
        .required(),
      unit: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      relate: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    })
    .nullable(true),
  [FieldName.alcohol]: Yup.object()
    .shape({
      value: Yup.number()
        .min(0)
        .max(100)
        .required(),
      unit: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      relate: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      scope: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    })
    .nullable(true),
  [FieldName.aged]: Yup.array().of(
    Yup.object().shape({
      type: Yup.string()
        // null should be treated as correct option
        .transform(v => (v === null ? 'ok' : v))
        .required(),
      wood: Yup.string()
        // null should be treated as correct option
        .transform(v => (v === null ? 'ok' : v))
        .required(),
      time: Yup.object()
        .shape({
          unit: Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          }),
          value: Yup.number()
            .min(1)
            .required(),
        })
        .nullable(true),
      previousContent: Yup.array()
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          }),
        )
        .min(1)
        .nullable(true),
    }),
  ),
  [FieldName.expirationDate]: Yup.object()
    .shape({
      value: Yup.number()
        .min(1)
        .max(500)
        .required(),
      unit: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    })
    .nullable(true),
  // // -----------
  // [FieldName.ingredients]: Yup
  // 	.array()
  // 	.of(
  // 		Yup.object().shape({
  // 			lang: Yup.object().shape({
  // 				label: Yup.string().required('danger'),
  // 				value: Yup.string().required('danger'),
  // 			}),
  // 			value: Yup.string()
  // 				.min(12, 'danger')
  // 				.required('danger'),
  // 		}),
  // 	),
  // [FieldName.ingredientsList]: Yup
  // 	.array()
  // 	.min(1, 'danger')
  // 	.nullable(true),
  // // -----------
  // [FieldName.bitterness]: Yup
  // 	.number()
  // 	.min(0, 'danger')
  // 	.max(100, 'danger')
  // 	.nullable(true),
  // [FieldName.sweetness]: Yup
  // 	.number()
  // 	.min(0, 'danger')
  // 	.max(100, 'danger')
  // 	.nullable(true),
  // [FieldName.fullness]: Yup
  // 	.number()
  // 	.min(0, 'danger')
  // 	.max(100, 'danger')
  // 	.nullable(true),
  // [FieldName.power]: Yup
  // 	.number()
  // 	.min(0, 'danger')
  // 	.max(100, 'danger')
  // 	.nullable(true),
  // [FieldName.hoppyness]: Yup
  // 	.number()
  // 	.min(0, 'danger')
  // 	.max(100, 'danger')
  // 	.nullable(true),
  // [FieldName.temperature]: Yup
  // 	.object()
  // 	.shape({
  // 		from: Yup.number()
  // 			.min(0, 'danger')
  // 			.max(Yup.ref('to'), 'danger')
  // 			.required('danger'),
  // 		to: Yup.number()
  // 			.min(Yup.ref('from'), 'danger')
  // 			.max(100, 'danger')
  // 			.required('danger'),
  // 		unit: Yup.object().shape({
  // 			label: Yup.string().required('danger'),
  // 			value: Yup.string().required('danger'),
  // 		}),
  // 	})
  // 	.nullable(true),
  // // -----------
  [FieldName.container]: Yup.object().shape({
    type: Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    }),
    color: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
    material: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
    value: Yup.number()
      .min(1)
      .max(5000)
      .required(),
    unit: Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    }),
    hasCapWireFlip: Yup.boolean(),
  }),
  // [FieldName.price]: Yup.array()
  // 	.of(
  // 		Yup.object().shape({
  // 			currency: Yup.object().shape({
  // 				label: Yup.string().required('danger'),
  // 				value: Yup.string().required('danger'),
  // 			}),
  // 			date: Yup
  // 				.mixed()
  // 				.test('isCorrectDate', 'danger', value => isValidDate(value)),
  // 			value: Yup.number()
  // 				.min(0, 'danger')
  // 				.required('danger'),
  // 		}),
  // 	),
});

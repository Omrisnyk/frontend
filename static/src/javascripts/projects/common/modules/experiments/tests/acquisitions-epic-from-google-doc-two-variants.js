// @flow
import { makeABTest, makeGoogleDocEpicVariants } from 'common/modules/commercial/contributions-utilities';

const abTestName = 'AcquisitionsEpicFromGoogleDocTwoVariants';

export const acquisitionsEpicFromGoogleDocTwoVariants: EpicABTest = makeABTest({
    id: abTestName,
    campaignId: abTestName,

    start: '2018-04-17',
    expiry: '2019-06-05',

    author: 'Jonathan Rankin',
    description: 'Always ask on this specific story',
    successMeasure: 'Conversion rate',
    idealOutcome: 'Always ask on this story',

    audienceCriteria: 'All',
    audience: 1,
    audienceOffset: 0,

    variants: [
        {
            id: 'control',
            products: [],
        },
        ...makeGoogleDocEpicVariants(2)
    ],
});
import { FormInputs, FormSelects } from '../components';

import { Form, Link, useSubmit } from 'react-router-dom';
import {
  MEMBER_STATUS,
  DELEGATE_RECOMMENDATIONS,
  MEMBER_SORT_BY,
} from '../../../utils/constants';
import { useAllMembersContext } from '../pages/AllMembers';

const SearchContainer = () => {
  const { searchValues } = useAllMembersContext();

  const { searchNames, memberStatus, delegateRecommendation, sort } =
    searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <section className='h-full w-full  place-items-center mt-10 mb-10 '>
      <Form
        // method='POST'
        className='card w-full lg:w-full px-8 pb-10 pt-4 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4  border-primary '
      >
        <h4 className='text-start text-3xl font-bold my-8 capitalize '>
          search form
        </h4>
        <div className='grid  lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>
          <FormInputs
            type='search'
            label='search names'
            name='searchNames'
            defaultValue={searchNames}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormSelects
            label='member status'
            name='memberStatus'
            list={['all', ...Object.values(MEMBER_STATUS)]}
            defaultValue={memberStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelects
            label='sponsor recommendation'
            name='delegateRecommendation'
            list={['all', ...Object.values(DELEGATE_RECOMMENDATIONS)]}
            defaultValue={delegateRecommendation}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelects
            label='sort'
            name='sort'
            list={[...Object.values(MEMBER_SORT_BY)]}
            defaultValue={sort}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to='/dashboard' className='btn btn-secondary btn-block mt-9'>
            Reset Search Values
          </Link>
        </div>
      </Form>
    </section>
  );
};
export default SearchContainer;

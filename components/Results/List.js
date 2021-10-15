import Entry from './Entry';

export default function List() {
  return (
    <div class="grid grid-flow-row auto-rows-max md:grid-cols-2 gap-8 my-8">
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>
  );
}

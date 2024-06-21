@extends('admin.base')

@section('section_title')
    <strong>{{ __('Game List') }}</strong>
@endsection

@section('section_body')
    <form method="POST" action="{{ empty($selectedGame) ? '/admin/add_game' : '/admin/update_game' }}"
        enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class="flex bg-white rounded p-3">
            <div>
                <div class="flex items-center">

                    @if (!empty($selectedGame->title))
                        <input type="hidden" name="id" value="{{ $selectedGame->id }}">
                    @endif

                    <div>
                        <x-label for="title">Game Title: </x-label>
                        <x-input type="text" name="title" id="title" value="{{ $selectedGame->title ?? null }}"
                            placeholder="{{ __('Game Title') }}" />
                    </div>
                    <div class="ml-3">
                        <x-label for="category">Category: </x-label>
                        <x-select id="category" name="category">
                            @foreach ($categories as $category)
                                <option value="{{ $category->id }}" @if ($selectedGame && $category->id == $selectedGame->category_id) selected @endif>
                                    {{ __($category->category) }}</option>
                            @endforeach
                        </x-select>
                    </div>



                </div><!-- /.col-xs-12 col-md-6 -->
                <x-input type="file" name="thumbnail" class=" my-2 items-center" />


                <div class="ml-3 self-end" style="align-self: end">
                    <x-button>{{ empty($selectedGame->title) ? __('Add') : __('Update') }}</x-button>
                </div>
            </div>
            <div class="ml-3">
                @if (!empty($selectedGame->thumbnail))
                    <img src="{{ url($selectedGame->thumbnail) }}" alt="Game Thumbnail" style="height: 200px">
                @else
                    <h4>No Thumbnail</h4>
                @endif
            </div>
        </div>
    </form>

    <hr class="my-3" />

    @if ($games)
        {{ $games->links() }}
        <table class="table border-collapse w-full bg-white text-stone-600 mt-2">
            <thead>
                <tr>
                    <x-th>{{ __('ID') }}</x-th>
                    <x-th>{{ __('Game Title') }}</x-th>
                    <x-th>{{ __('Category') }}</x-th>
                    <x-th>{{ __('Thumbnail') }}</x-th>
                    <x-th>{{ __('Actions') }}</x-th>
                </tr>
            </thead>
            <tbody>
                @foreach ($games as $c)
                    <tr>
                        <x-td>
                            <x-slot name="field">{{ __('ID') }}</x-slot>
                            {{ $c->id }}
                        </x-td>
                        <x-td>
                            <x-slot name="field">{{ __('Game Title') }}</x-slot>
                            {{ $c->title }}
                        </x-td>
                        <x-td>
                            <x-slot name="field">{{ __('Category') }}</x-slot>
                            {{ $c->category->category }}
                        </x-td>
                        <td class="text-center" style="border: 1px solid #e5e7eb;">
                            {{-- <x-slot name="field">{{ __('Thumbnail') }}</x-slot> --}}
                            @if (!empty($c->thumbnail))
                                <img src="{{ url($c->thumbnail) }}" alt="" style="height: 40px; margin: auto;">
                            @endif
                            {{-- {{ $c->thumbnail }} --}}
                        </td>
                        {{-- <x-td>
                            <x-slot name="field">{{ __('Videos') }}</x-slot>
                            <span class="inline-flex px-2 py-1 bg-indigo-200 text-indigo-700 rounded-lg">
                                {{ $c->videos_count }}
                            </span>
                        </x-td> --}}
                        <x-td>
                            <x-slot name="field">{{ __('Actions') }}</x-slot>
                            <div class="btn-group">
                                <a class="inline-flex mr-2" href="/admin/games?update={{ $c->id }}">
                                    <i class="fa-solid fa-pencil text-teal-600"></i>
                                </a>
                                <a href="/admin/games?remove={{ $c->id }}"
                                    onclick="return confirm('{{ __('Are you sure you want to remove this game?') }}');"
                                    class="inline-flex">
                                    <i class="fa-solid fa-trash text-red-400"></i>
                                </a>
                            </div>
                        </x-td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        {{ __('No Games Data') }}
    @endif
@endsection

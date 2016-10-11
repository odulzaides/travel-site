@define-mixin atSmall {
    @media (min-width: 530px){
        @mixin-content;
    }
}

@define-mixin atMedium {
    @media (min-width: 800px){
        @mixin-content;
    }
}

@define-mixin atLarge {
    @media (min-width: 1200px){
        @mixin-content;
    }
}